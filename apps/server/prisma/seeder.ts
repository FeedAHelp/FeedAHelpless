import { PrismaClient } from '@prisma/client';
import fsPromises from 'fs/promises';
import path from 'path';
import ProgressBar from 'progress';

const prisma = new PrismaClient();

export async function seeder({file, schema}: {file: string; schema: string}) {
    const filePath = path.join(process.cwd(), file);
    const jsonData = await fsPromises.readFile(filePath);
    const rawData = JSON.parse(jsonData.toString());
    const data = rawData.data;
    const totalData = data.length;
    const prismaTable = (prisma as any)[schema];


    await prismaTable.deleteMany();

    const bar = new ProgressBar('  inserting [:bar] :rate/bps :percent :etas', {
        complete: '=',
        incomplete: ' ',
        width: 20,
        total: totalData,
    });

    const createIngredient = async (ingredient : any) => {
        try {
            await prismaTable.create({
                data: ingredient,
            });
            bar.tick();
        } catch (error) {
            console.error(`Error inserting ${schema}: ${error.message}`);
        }
    };

    const insertIngredients = async () => {
        const promises = data.map((ingredient : any) => createIngredient(ingredient));
        await Promise.all(promises);
        console.log(`All ${schema} inserted successfully.`);
    };
    await insertIngredients();

    await prisma.$disconnect();
}
