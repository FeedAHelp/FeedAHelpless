import express, { Router } from 'express'
import { IngredientController } from '../controllers/ingredient/ingredient.controller'
import IngredientModel from 'models/IngredientModel'

export const ingredientRouter: Router = express.Router()

const ingredientController = new IngredientController()

ingredientRouter.get('/all', ingredientController.getAllIngredients)
ingredientRouter.get('/:id', ingredientController.getIngredient)

export default ingredientRouter
