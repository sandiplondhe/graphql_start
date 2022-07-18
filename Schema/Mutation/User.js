const graphql = require("graphql");
const { GraphQLString, GraphQLInt } = graphql;
const UserType = require("../TypeDefs/UserType");
const db = require("../../models");
const User = db.users;

module.exports.USER_ADD = {
  type: UserType,
  args: {
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    gender: { type: GraphQLString },
  },
  resolve: async (parent, args) => {
    await User.create({
      name: args.name,
      email: args.email,
      gender: args.gender,
    });
    return args;
  },
};
