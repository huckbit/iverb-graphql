# iVerb graphQL API

## Run the server

```bash
npm run start
```

## Query the API

Once the server is up and running open GraphiQL at [http://localhost:4000/graphql](http://localhost:4000/graphql)

### Get all the verbs

```graphql
{
  verbs {
    id
    infinitive
    presentParticiple
    past
    pastParticiple
  }
}
```

### Get verb by id

![graphiql-query](doc/images/GraphiQL-query.jpg)

Use the following query

```graphql
query getVerbById($id: String!) {
  verbByID(id: $id) {
    id
    infinitive
    presentParticiple
    past
    pastParticiple
  }
}
```

And for example the following for the Query variables

```graphql
{
  "id": "5eac5bec4ff0d27fa4efa7d2"
}
```

### Get Verb by infinitive

Use the following query

```graphql
query getVerbByInfinitive($infinitive: String!) {
  verbByInfinitive(infinitive: $infinitive) {
    id
    infinitive
    presentParticiple
    past
    pastParticiple
  }
}
```

Use for the query variable for example:

```graphql
{
  "infinitive": "do"
}
```
