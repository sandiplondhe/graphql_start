const graphql = require("graphql");
const { GraphQLObjectType, GraphQLSchema } = graphql;
const { USER_LIST, USER_LIST2 } = require("../Schema/Queries/User");
const { USER_ADD } = require("../Schema/Mutation/User");

const RootQuery = new GraphQLObjectType({
  name: "sandip",
  fields: {
    userList: USER_LIST,
    taskUser: USER_LIST2,
  },
});

const Mutation = new GraphQLObjectType({
  name: "mutation",
  fields: {
    createUser: USER_ADD,
  },
});

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });
