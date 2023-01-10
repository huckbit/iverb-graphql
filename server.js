const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { getVerbs, getVerbById, getVerbByInfinitive } = require("./src/gql.controller");
const schema = require("./src/gql.schema");

/* Root provides a resolver function for each API endpoint */
const root = {
  verbs: getVerbs,
  verbByID: getVerbById,
  verbByInfinitive: getVerbByInfinitive,
};

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "go to route /graphql" });
});

app.use("/graphql", graphqlHTTP({ schema: schema, rootValue: root, graphiql: true }));

app.listen(4000, () => console.log("Running GraphQL API server at localhost:4000/graphql"));
