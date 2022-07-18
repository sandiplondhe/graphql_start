const Sequelize = require("sequelize");
const sequelize = new Sequelize("graphql_test", "root", "Sandy#0707", {
  host: "localhost",
  dialect: "mysql",
  port: 3307,
  logging: false,
});
sequelize
  .authenticate()
  .then(() => console.log("Connected"))
  .catch((e) => console.log("Error " + e));

module.exports = sequelize;
