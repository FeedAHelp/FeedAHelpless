import IngredientModel from '../../models/IngredientModel'
import type { Request, Response } from 'express'

export class IngredientController extends IngredientModel {
  async getIngredient(req: Request, res: Response) {
    try {
      const { id } = req.params
      const ingredient = await super.read(id)
      res.status(200).json(ingredient)
    } catch (error) {
      console.log(error)
      res.status(500).json('Internal Server Error')
    }
  }

  async getAllIngredients(req: Request, res: Response) {
    try {
      const ingredients = await super.allIngredients()
      res.status(200).json(ingredients)
    } catch (error) {
      console.log(error)
      res.status(500).json('Internal Server Error')
    }
  }
}
