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

    await prisma.ingredients.deleteMany(); // Delete existing records

    console.log('Deleted records in ingredients table');

    const bar = new ProgressBar('  inserting [:bar] :rate/bps :percent :etas', {
        complete: '=',
        incomplete: ' ',
        width: 20,
        total: totalIngredients,
    });

    const createIngredient = async (ingredient : any) => {
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
        const promises = ingredients.map((ingredient :any) => createIngredient(ingredient));
        await Promise.all(promises);
        console.log("All ingredients inserted successfully.");
    };

    await insertIngredients(); // Await the insertion function

    await prisma.$disconnect();
}

main().catch((e) => {
    console.error(e);
});
