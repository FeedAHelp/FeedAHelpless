import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import fsPromises from 'fs/promises';
import path from 'path';
import ProgressBar from 'progress';

async function main() {
    const filePath = path.join(process.cwd(), 'prisma/ingredients.json');
    const jsonData = await fsPromises.readFile(filePath);
    const IngredientsData = JSON.parse(jsonData.toString());
    const ingredients = IngredientsData.ingredients;
    const totalIngredients = ingredients.length;

    await prisma.ingredients.deleteMany()
    console.log('Deleted records in ingredients table');
    var bar = new ProgressBar('  inserting [:bar] :rate/bps :percent :etas', {
        complete: '=',
        incomplete: ' ',
        width: 20,
        total: totalIngredients
      });
    
    const createIngredient = async (ingredient: { name: any; imageName: any; }) => {
        await prisma.ingredients.create({
            data: {
                name: ingredient.name,
                imageName: ingredient.imageName,
            },
        });
        bar.tick();
    };

    const insertIngredients = async () => {
        const promises = ingredients.map((ingredient: { name: any; imageName: any; }) => createIngredient(ingredient));
        await Promise.all(promises);
        console.log("All ingredients inserted successfully.");
    };

    insertIngredients();
}

main().catch(e => {
    console.error(e);
    process.exit(1);
}).finally(async () => {
    await prisma.$disconnect();
})
