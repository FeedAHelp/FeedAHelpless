import { PrismaClient } from '@prisma/client';
import fsPromises from 'fs/promises';
import path from 'path';
import ProgressBar from 'progress';

const prisma = new PrismaClient();

async function main() {
    const filePath = path.join(process.cwd(), 'prisma/ingredients.json');
    const jsonData = await fsPromises.readFile(filePath);
    const IngredientsData = JSON.parse(jsonData.toString());
    const ingredients = IngredientsData.ingredients;
    const totalIngredients = ingredients.length;

    await prisma.ingredients.deleteMany();

    console.log('Deleted records in ingredients table');

    const bar = new ProgressBar('  inserting [:bar] :rate/bps :percent :etas', {
        complete: '=',
        incomplete: ' ',
        width: 20,
        total: totalIngredients,
    });

    const createIngredient = async (ingredient : {name: string, imageName: string}) => {
        try {
            await prisma.ingredients.create({
                data: {
                    name: ingredient.name,
                    imageName: ingredient.imageName,
                },
            });
            bar.tick();
        } catch (error) {
            console.error(`Error inserting ingredient: ${error.message}`);
        }
    };

    const insertIngredients = async () => {
        const promises = ingredients.map((ingredient : {name: string, imageName: string}) => createIngredient(ingredient));
        await Promise.all(promises);
        console.log("All ingredients inserted successfully.");
    };

    await insertIngredients();
}

main().catch(e => {
    console.error(e);
    process.exit(1);
}).finally(async () => {
    await prisma.$disconnect();
})
