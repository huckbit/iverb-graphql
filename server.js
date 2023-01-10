const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const verbsData = require("./data/verbs.json");

/* Construct a schema using GraphQL schema language */
const schema = buildSchema(`
    type Query {
        verbByID(id: String!): Verb
        verbs: [Verb]
    },
    type Verb {
        id: String
        infinitive: String
        presentParticiple: String
        past: String
        pastParticiple: String
    }
`);

/* Root provides a resolver function for each API endpoint */
const getVerbById = (args) => {
  let id = args.id;
  return verbsData.filter((verb) => {
    return verb.id === id;
  })[0];
};

const getVerbs = () => {
  return verbsData;
};

const root = {
  verbByID: getVerbById,
  verbs: getVerbs,
};

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({ schema: schema, rootValue: root, graphiql: true })
);

app.listen(4000, () =>
  console.log("Running GraphQL API server at localhost:4000/graphql")
);
