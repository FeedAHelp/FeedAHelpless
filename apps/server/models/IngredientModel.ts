import { PrismaClient } from '@prisma/client'
import Ingredient from './Ingredient'
const prisma = new PrismaClient()

class IngredientModel {
  private ingredients: Ingredient[] = []

  async exists(id: string): Promise<boolean> {
    const numberOfIngredients: number = await prisma.ingredient.count({
      where: { id }
    })
    if (numberOfIngredients > 0) return true
    return false
  }

  async create(data: { id: string; name: string; imageName: string }): Promise<Ingredient> {
    const createdIngredient = await prisma.ingredient.create({
      data: {
        name: data.name,
        imageName: data.imageName
      }
    })
    return new Ingredient(createdIngredient.id, createdIngredient.name, createdIngredient.imageName)
  }

  async read(id: string): Promise<Ingredient | null> {
    const ingredient = await prisma.ingredient.findUnique({
      where: { id }
    })
    if (!ingredient) return null
    return new Ingredient(ingredient.id, ingredient.name, ingredient.imageName)
  }

  async update(id: string, data: { name: string; imageName: string }): Promise<Ingredient | null> {
    const updatedIngredient = await prisma.ingredient.update({
      where: { id },
      data: {
        name: data.name,
        imageName: data.imageName
      }
    })
    if (!updatedIngredient) return null
    return new Ingredient(updatedIngredient.id, updatedIngredient.name, updatedIngredient.imageName)
  }

  async delete(id: string): Promise<boolean> {
    const deleteResult = await prisma.ingredient.delete({
      where: { id }
    })
    return !!deleteResult
  }

  async getAll(): Promise<Ingredient[]> {
    const ingredients = await prisma.ingredient.findMany()
    return ingredients.map((ingredient) => new Ingredient(ingredient.id, ingredient.name, ingredient.imageName))
  }
}

export default IngredientModel
