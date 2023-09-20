import { PrismaClient } from '@prisma/client';
import fsPromises from 'fs/promises';
import path from 'path';
import ProgressBar from 'progress';

const prisma = new PrismaClient();

export async function seed({file, schema}: {file: string; schema: string}) {
    const filePath = path.join(process.cwd(), file);
    const jsonData = await fsPromises.readFile(filePath);
    const rawData = JSON.parse(jsonData.toString());
    const data = rawData[schema];
    const totalData = data.length;
    const prismaTable = (prisma as any)[schema];


    await prismaTable.deleteMany();

    const bar = new ProgressBar('  inserting [:bar] :rate/bps :percent :etas', {
        complete: '=',
        incomplete: ' ',
        width: 20,
        total: totalData,
    });

    const createEntry = async (i : any) => {
        try {
            await prismaTable.create({
                data: i,
            });
            bar.tick();
        } catch (error) {
            console.error(`Error inserting ${schema}: ${error.message}`);
        }
    };

    const insertAll = async () => {
        const promises = data.map((i : any) => createEntry(i));
        await Promise.all(promises);
        console.log(`All ${schema} inserted successfully.`);
    };
    await insertAll();

    await prisma.$disconnect();
}
