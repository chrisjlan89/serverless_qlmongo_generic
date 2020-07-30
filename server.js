const { ApolloServer } = require("apollo-server-lambda");
const db = require("./db/models");
const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutations");
const Date = require("./resolvers/Scalars");
const mongoose = require("mongoose");
const typeDefs = require("./typeDefs");
require("dotenv").config();

const resolvers = {
  Query,
  Mutation,
  Date,
};
// Make env file on production lambda dash, set connection string to connection
// Ex CONNECTION=MONGO_URL_HERE
// You can renmae connection in here but mnake sure it reflects in ENV too and vice -versa
const mongoUri = process.env.CONNECTION;
async function start() {
  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: false,
    connectTimeoutMS: 1800000,
    poolSize: 10,
  });
  mongoose.connection.on("error", function (err) {
    console.log("Mongoose default connection error: " + err);
  });
  return true;
}
//test
const server = new ApolloServer({
  typeDefs,
  resolvers,
  resolverValidationOptions: {
    requireResolversForResolveType: false,
  },
  context: ({ event, context }) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context,
    db,
  }),
  //   playground: {
  //     settings: {
  //       "request.credentials": "same-origin"
  //     }
  //   }
});

exports.graphqlHandler = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  start().then(() =>
    server.createHandler({
      cors: {
        origin: "*",
        credentials: true,
      },
    })(event, context, callback)
  );
};
