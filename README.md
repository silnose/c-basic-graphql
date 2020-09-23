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

Funcion o metodo que resuelve el valor dado para un tipo o campo en un schema. Pueden retornar objetos, strings,booleans, numbers.

Los resolvers tb puede ser asincronos osea que pueden resolver valores de otras API RESTs, BD, cache etc...

# Custom Types

GraphQL nos permite configurar nuestros propios tipos de datos, estos deben tener la siguientes sintaxis:

```
type <Nombre del tipo> {
  propiedad: Tipo de dato
}
```

Dentro de nuestros tipos de datos podemos configurar un campo de un tipo como obligatorio con el signo “!”, quedando por ejemplo:

```
type Course {
  title: String!
}
```

# Argumentos

Podemos pasar argumentos con distintos tipos de información dentro de las peticiones que hagamos en GraphQL, su sintaxis quedaría de la siguiente manera:

```
nombreQuery(campo: tipo): tipo
```

Dentro del resolver los argumentos de la petición pasarían como segundo parámetro, el primero es root y el segundo es args.

# Mutations & Inputs

<https://graphql.org/learn/queries/#mutations>

En un API también vamos a necesitar mandar información para que sea almacenada, dentro de GraphQL esto es posible gracias a la especificación **mutation**.

Un mutation va a requerir de un campo de tipo **Input** que son como plantillas que le van a indicar qué campos son necesarios para insertar o modificar información.

La sintaxis de una mutation queda de la siguiente manera:

```
nombreMutation(input: InputType): tipo
```

# Nested Types

Relaciones entre los tipos

# Resolver - Types

GraphQL necesita de un resolver para el tipo de dato padre y una función para el campo del nested type para poder extraer su información.

# Manejo de errores

# Articulos Interesantes

<https://medium.com/paypal-engineering/graphql-resolvers-best-practices-cd36fdbcef55>

# Mongo DB

<https://docs.mongodb.com/manual/reference/method/js-collection/index.html>

## Conectar

1 -Creen una cuenta en MongoDB Atlas<https://cloud.mongodb.com/> y generen un nuevo cluster
2- En el nuevo cluster, hagan click en Connect
3- Coloquen en lista blanca su IP o 0.0.0.0 para permitir todas
5- Creen un usuario para la BD con su contraseña
5- Seleccionen la opcion "connect your aplication"
6- Copien la cadena de conexion
7- Vayan a collections y agreguen una base de datos
name: platzi
collection: courses
De igual manera el mismo sistema los va guiando.

Luego descarguen robot3t <https://angelcruz.dev/post/instalar-robo-3t-formerly-robomongo-en-ubuntu-1804>
1- En robot3t hagan click en Create en la ventana MongoDB Connections
2- Peguen la cadena de conexion copiada anteriormente (reemplacen las variables <>) en el input al lado de FROM SRV 3) Hagan click en From SRV 4) Click en test connection 5) Si todo salio bien click en Save

## Insertar

En robot3t:

```
db.getCollection('courses').insertMany([ {
    title: 'React',
    description: 'Basics with react',
    teacher: 'Oscar Barajas',
    topic: 'js',
  },
  {
    title: 'Redux',
    description: 'Basics with react',
    teacher: 'Silvana Murgo',
    topic: 'js',
  },
  {
    title: 'React Router',
    description: 'Basics with react',
    teacher: 'Edgardo Ponce',
    topic: 'js',
  },])
```
