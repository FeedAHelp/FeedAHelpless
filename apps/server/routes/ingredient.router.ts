import express, { Router } from 'express'
import { IngredientController } from '../controllers/ingredient/ingredient.controller'

export const ingredientRouter: Router = express.Router()

const ingredientController = new IngredientController()

ingredientRouter.get('/:id', ingredientController.getAIngredient)

export default ingredientRouter
