const { buildSchema } = require("graphql");

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

module.exports = schema;
