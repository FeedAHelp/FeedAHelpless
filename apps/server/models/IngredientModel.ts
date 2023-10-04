import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

interface Ingredient {
  id: string
  name: string
  imageName: string
}

class IngredientModel {
  async allIngredients(): Promise<Ingredient[]> {
    const ingredients = await prisma.ingredient.findMany()
    return ingredients.map(({ id, name, imageName }) => ({ id, name, imageName }))
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

      const { id, name, imageName } = createdIngredient

      return {
        id,
        name,
        imageName
      }
    } catch (error) {
      console.error(error)
      return null
    }
  }

  async read(id: string): Promise<Ingredient | null> {
    try {
      const ingredient = await prisma.ingredient.findUnique({
        where: { id }
      })

      if (!ingredient) return null

      const { name, imageName } = ingredient

      return {
        id: ingredient.id,
        name,
        imageName
      }
    } catch (error) {
      console.error(error)
      return null
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

      const { name, imageName } = updatedIngredient

      return {
        id: updatedIngredient.id,
        name,
        imageName
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
