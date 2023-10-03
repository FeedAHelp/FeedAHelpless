import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

interface Ingredient {
  id: string
  name: string
  imageName: string
}

class IngredientModel {
  async allIngredients(): Promise<Ingredient[]> {
    return await prisma.ingredient.findMany()
  }

  async exists(id: string): Promise<boolean> {
    const numberOfIngredients: number = await prisma.ingredient.count({
      where: { id }
    })
    return numberOfIngredients > 0
  }

  async create(data: { name: string; imageName: string }): Promise<Ingredient | null> {
    try {
      const createdIngredient = await prisma.ingredient.create({
        data: {
          name: data.name,
          imageName: data.imageName
        }
      })

      return {
        id: createdIngredient.id,
        name: createdIngredient.name,
        imageName: createdIngredient.imageName
      }
    } catch (error) {
      console.error(error)
      return null
    }
  }

  async read(id: string): Promise<Ingredient | null> {
    const ingredient = await prisma.ingredient.findUnique({
      where: { id }
    })

    if (!ingredient) return null

    return {
      id: ingredient.id,
      name: ingredient.name,
      imageName: ingredient.imageName
    }
  }

  async update(id: string, data: { name: string; imageName: string }): Promise<Ingredient | null> {
    try {
      const updatedIngredient = await prisma.ingredient.update({
        where: { id },
        data: {
          name: data.name,
          imageName: data.imageName
        }
      })

      if (!updatedIngredient) return null

      return {
        id: updatedIngredient.id,
        name: updatedIngredient.name,
        imageName: updatedIngredient.imageName
      }
    } catch (error) {
      console.error(error)
      return null
    }
  }

  async delete(id: string): Promise<boolean> {
    try {
      await prisma.ingredient.delete({
        where: { id }
      })

      return true
    } catch (error) {
      console.error(error)
      return false
    }
  }
}

export default IngredientModel
