const { gql } = require("apollo-server-lambda");
const typeDefs = gql`
  directive @showAll(all: Boolean = false) on FIELD_DEFINITION

  scalar Date

  type User {
    _id: ID!
    userType: UserRole
    name: String
    hobbies: [String]
    age: Int
    hometown: String
    createdAt: Date
    updatedAt: Date
  }

  input UserInput {
    name: String
    userType: UserRole
    hobbies: [String]
    age: Int
    hometown: String
  }

  enum UserRole {
    ADMIN
    USER
  }

  type Query {
    allUsers: [User]!
  }

  type Mutation {
    createUser(input: UserInput): User!
  }
`;

module.exports = typeDefs;
