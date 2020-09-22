'use strict';

import { graphql, buildSchema } from 'graphql';

// Definiendo esquema
const schema = buildSchema(`
type Query {
   hello: String,
   goodbye: String
}
`);
// configurar resolvers
const resolvers = {
  hello: () => {
    return 'hello word';
  },
  goodbye: () => 'goodbye',
};
// Ejecutar query hello

graphql(schema, '{goodbye}', resolvers).then((data) => console.log(data));

// node index.js
