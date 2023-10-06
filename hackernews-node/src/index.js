const { ApolloServer } = require('apollo-server');
// import prismaclient into file
const { PrismaClient } = require('@prisma/client')

// 2
// The links variable is used to store the links at runtime. For now, everything is stored only in-memory rather than being persisted in a database.
// we removed the links variable and array because we will be migrating it to the database
  
  // 1
  const resolvers = {
    Query: {
      info: () => `This is the API of a Hackernews Clone`,
      feed: async (parent, args, context) => {
        return context.prisma.link.findMany()
      },
    },
    Mutation: {
      post: (parent, args, context, info) => {
        const newLink = context.prisma.link.create({
          data: {
            url: args.url,
            description: args.description,
          },
        })
        return newLink
      },
    },
  }

// 3
const fs = require('fs');
const path = require('path');

// save an instance of prismaclient to a varialbe so that you can add it to the context 
const prisma = new PrismaClient()

const server = new ApolloServer({
    typeDefs: fs.readFileSync(
        path.join(__dirname, 'schema.graphql'),
        'utf8'
      ),
  resolvers,
  // add prisma to context
  context: {
    prisma,
  }
})

server
  .listen()
  .then(({ url }) =>
    console.log(`Server is running on ${url}`)
  );