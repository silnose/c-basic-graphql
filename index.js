'use strict';

const { makeExecutableSchema } = require('graphql-tools');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { readFileSync } = require('fs');
const { join } = require('path');
const resolvers = require('./lib/resolvers.js');
const cors = require('cors');
//INFO: Express
const app = express();
const port = 3000;
const isDev = process.env.NODE_ENV !== 'production';
console.log('-----------------------');
console.log(process.env.NODE_ENV);
console.log(isDev);
//Info Definiendo esquema
const typeDefs = readFileSync(
  join(__dirname, 'lib', 'schema.graphql'),
  'utf-8'
);
const schema = makeExecutableSchema({ typeDefs, resolvers });

app.use(cors());

app.use('/api', graphqlHTTP({ schema, rootValue: resolvers, graphiql: isDev }));

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}/api`);
});
