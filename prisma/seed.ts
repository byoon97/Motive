// prisma/seed.ts
import { PrismaClient } from '@prisma/client'
``
const prisma = new PrismaClient()

async function main() {
  await prisma.user.create({
    data: {
      email: `testemail@gmail.com`,
      firstName: 'George',
      lastName: 'Clooney',
      host: false,
    },
  })

}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })