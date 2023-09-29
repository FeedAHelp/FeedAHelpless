import IngredientModel from '../../models/IngredientModel'
import type { Request, Response } from 'express'

export class IngredientController extends IngredientModel {
  async getAIngredient(req: Request, res: Response) {
    const { id } = req.params
    const ingredient = await super.read(id)
    res.status(200).json(ingredient)
  }
}