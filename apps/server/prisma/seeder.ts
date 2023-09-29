import { PrismaClient } from '@prisma/client'
import fsPromises from 'fs/promises'
import path from 'path'

const prisma = new PrismaClient()

async function insertAll(schemaName: string, entries: Object[]): Promise<any> {
  const model = (prisma as any)[schemaName]
  if (!model) return false

  const createdEntries = await model.createMany({
    data: entries,
    skipDuplicates: true
  })
  return createdEntries.length > 0
}

export async function seed({ file, schema }: { file: string; schema: string }) {
  const filePath = path.join(process.cwd(), file)
  const fileData = await fsPromises.readFile(filePath)

  const jsonData = JSON.parse(fileData.toString())
  const data = jsonData[schema]
  const model = (prisma as any)[schema]

  if (await insertAll(schema, data)) {
    console.log(`All ${schema} inserted successfully.`)
  }
}
