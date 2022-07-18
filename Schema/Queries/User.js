const graphql = require("graphql");
const { GraphQLList } = graphql;
const UserType = require("../TypeDefs/UserType");

module.exports.USER_LIST = {
  type: new GraphQLList(UserType),
  resolve: async (parent, args, context) => {
    let myData = await context();
    console.log(myData);
    let { dbConfig } = parent;
    let data = dbConfig.users.findAll();
    return data;
  },
};

module.exports.USER_LIST2 = {
  type: new GraphQLList(UserType),
  resolve(parent, args) {
    let { dbConfig } = parent;
    let data = dbConfig.users.findAll({ where: { id: 1 } });
    return data;
  },
};
