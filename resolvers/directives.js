const {
  SchemaDirectiveVisitor,
  AuthenticationError,
} = require("apollo-server");
const {
  defaultFieldResolver,
  GraphQLString,
  GraphQLBoolean,
} = require("graphql");

class ShowAllDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;
    const { showAll } = this.args;
    field.args.push({ name: "showALl", type: GraphQLBoolean });
    field.resolve = async (root, ctx, info) => {
      //  const result = await resolve.call(this, root, rest, ctx, info);
      return resolve;
    };
  }
}

module.exports = {
  ShowAllDirective,
};
