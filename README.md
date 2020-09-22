# Curso basico de Graphql

<https://graphql.org/>

# Que es GraphQL?

Es un nuevo paradigma aplicado a un problema antiguo q siempre han tenido los desarrolladores de tener que comunicar informacion entre diferentes aplicaciones.
Algunas de las soluciones que se han aplicado a lo largo del tiempo son:

- CORBA
- SOAP
- RPC
- REST ( la mas reciente )

Podemos ver a GraphQL como una solucion a este problema fue creada en el 2015 por desarrolladores de facebook para resolver ciertas limitaciones relacionadas al volumen de la informacion que presentaba REST.

Su principal ventaja es la **flexibilidad** lo que para REST requeria muchas consultas en una API GraphQL bien diseñado seria solo 1 llamada.

GraphQL cuenta con una forma estandarizada para definir todas las interacciones posibles con la informacion.

# Ventajas de GraphQL

- **lenguaje agnostico** osea no importa en el lenguaje que lo querramos implementar
- **validacion automatica** de la informacion al definirla
- **control de errores** estadarizado mas predecesible a a la hora de detectar errores
- **documentacion mininima** autogenerada que permite saber exactamente como usar el API
- **entorno de desarrollo amigable** para probar las iteracciones
  <https://www.youtube.com/watch?v=783ccP__No8&ab_channel=Honeypot>

# Schema

<https://graphql.org/learn/schema/>
Es la base de GraphQL es un documento que describe todos los tipos de informacion que va a tener el API cada uno espesificando que tipo de campo es.
(Lo que me define que va a hacer mi API en graphQL)

# Querys

<https://graphql.org/learn/queries/>
Me permite ejecutar una consulta al API para obtener informacion. Debo indicar que consulta quiero ejecutar asi como los campos que quiero obtener

# Resolvers

Funcion o metodo que resuelve el valor dado para un tipo o campo en un schema

# Articulos Interesantes

<https://medium.com/paypal-engineering/graphql-resolvers-best-practices-cd36fdbcef55>
