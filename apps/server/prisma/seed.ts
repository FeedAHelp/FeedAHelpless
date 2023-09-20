import { PrismaClient } from '@prisma/client'
import fsPromises from 'fs/promises'
import path from 'path'
import ProgressBar from 'progress'
import { seed } from './seeder'

async function main() {
  seed({ file: "prisma/register.json", schema: 'register' }).catch((error) => {
    console.error(`Error seeding data: ${error}`)
  })
  seed({ file: "prisma/user.json", schema: 'user' }).catch((error) => {
    console.error(`Error seeding data: ${error}`)
  })
  seed({ file: "prisma/ingredients.json", schema: 'ingredients' }).catch((error) => {
    console.error(`Error seeding data: ${error}`)
  })
  seed({ file: "prisma/contributions.json", schema: 'contributions' }).catch((error) => {
    console.error(`Error seeding data: ${error}`)
  })
}

main();
