const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const verbsData = require("./data/verbs.json");

/* Construct a schema using GraphQL schema language */
const schema = buildSchema(`
    type Query {
      verbs: [Verb]
      verbByID(id: String!): Verb
      verbByInfinitive(infinitive: String!) : Verb
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

const getVerbs = () => {
  return verbsData;
};

const getVerbById = (args) => {
  let id = args.id;
  return verbsData.filter((verb) => {
    return verb.id === id;
  })[0];
};

const getVerbByInfinitive = (args) => {
  let infinitive = args.infinitive;
  return verbsData.filter((verb) => {
    return verb.infinitive === infinitive;
  })[0];
};

const root = {
  verbs: getVerbs,
  verbByID: getVerbById,
  verbByInfinitive: getVerbByInfinitive,
};

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({ schema: schema, rootValue: root, graphiql: true })
);

app.listen(4000, () =>
  console.log("Running GraphQL API server at localhost:4000/graphql")
);
