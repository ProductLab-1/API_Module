// 1 Import the PrismaClient constructor from the @prisma/client node module.
const { PrismaClient } = require("@prisma/client")

// 2 Instantiate PrismaClient.
const prisma = new PrismaClient()

// 3 Define an async function called main to send queries to the database. You will write all your queries inside this function.
async function main() {
  // new link
  const newLink = await prisma.link.create({
    data: {
        description: 'Fullstack tutorial for GraphQL',
        url: 'www.howtographql.com',
      },
    })
  const allLinks = await prisma.link.findMany()
  console.log(allLinks)
}

// 4 Call the main function.
main()
  .catch(e => {
    throw e
  })
  // 5 Close the database connections when the script terminates.
  .finally(async () => {
    await prisma.$disconnect()
  })