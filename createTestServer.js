const { GraphQLServer } = require("graphql-yoga");
const mongoose = require("mongoose");
const typeDefs = require("./typeDefs");
require("dotenv").config();
const { ShowAllDirective } = require("./resolvers/directives");

// Make env file locally, set connection string to connection
// Ex CONNECTION=MONGO_URL_HERE
// You can renmae connection in here but mnake sure it reflects in ENV too and vice -versa
mongoose.connect(process.env.CONNECTION, {
  useNewUrlParser: true,
  // useUnifiedTopology: true,
});
const db = require("./db/models");
const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutations");
const FieldLevel = require("./resolvers/FieldLevel/FieldLevel");
const Date = require("./resolvers/Scalars");

const resolvers = {
  Query,
  Mutation,
  Date,
  // ...FieldLevel,
};

const createQLServer = () =>
  new GraphQLServer({
    typeDefs,
    resolvers,
    // schemaDirectives: {
    //   showAll: ShowAllDirective,
    // },
    resolverValidationOptions: {
      requireResolversForResolveType: false,
    },
    context: (req) => ({ ...req, db }),
  });

module.exports = createQLServer;
