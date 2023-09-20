import { PrismaClient } from '@prisma/client'
import fsPromises from 'fs/promises'
import path from 'path'
import ProgressBar from 'progress'
import { seeder } from './seeder'

async function main() {
 seeder({ file: "prisma/ingredients.json", schema: 'ingredients' }).catch((error) => {
    console.error(`Error seeding data: ${error}`)
  })
  seeder({ file: "prisma/contributors.json", schema: 'contributionId' }).catch((error) => {
    console.error(`Error seeding data: ${error}`)
  })
}

main();


// main()
//   .catch((e) => {
//     console.error(e)
//     process.exit(1)
//   })
//   .finally(async () => {
//     await prisma.$disconnect()
//   })
