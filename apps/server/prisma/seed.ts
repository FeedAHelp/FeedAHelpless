import { PrismaClient } from '@prisma/client'
import { seed } from './seeder'
const prisma = new PrismaClient()

async function main() {
  await seed({ file: 'prisma/register.json', schema: 'register' })
  await seed({ file: 'prisma/user.json', schema: 'user' })
  await seed({ file: 'prisma/ingredients.json', schema: 'ingredient' })
  await seed({ file: 'prisma/contributions.json', schema: 'contributions' })
}

main()
  .catch((e) => {
    console.log('Error: ', e)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
