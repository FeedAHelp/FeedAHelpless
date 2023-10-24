import { PrismaClient } from '@prisma/client'
import { seed } from './seeder'
const prisma = new PrismaClient()

async function main() {
  await seed({ file: 'prisma/ingredients.json', schema: 'ingredient' })
}

main()
  .catch((e) => {
    console.log('Error: ', e)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
