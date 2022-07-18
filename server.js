const express = require("express");
const app = express();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./Schema");

const PORT = 3000;
require("./models");
app.use(express.json());

const db = require("./models");

const root = {
  dbConfig: db,
};
const contextCalled = async (req) => {
  const host = req.headers.host;
  const token = "sssssss";
  return { host, token };
};
app.use(
  "/graphql",
  graphqlHTTP(async (req) => ({
    schema,
    rootValue: root,
    graphiql: true,
    context: () => contextCalled(req),
  }))
);

app.listen(PORT, () => {
  console.log("listening on port 3000");
});
