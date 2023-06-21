import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getAllTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const allTodos = await prisma.todo.findMany()

    res.status(200).json({ data: allTodos })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

export const getTodoById = async (req: Request, res: Response): Promise<void> => {
  try {
    const todoId = req.params.id
    const todo = await prisma.todo.findUnique({ where: { id: todoId } })

    if (todo) {
      res.status(200).json({ data: todo })
    } else {
      res.status(404).json({ error: 'Todo not found' })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

export const createTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const todoData = req.body
    const createdTodo = await prisma.todo.create({ data: { ...todoData } })

    res.status(201).json({ data: createdTodo })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

export const updateTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const todoId = req.params.id
    const todoData = req.body
    const updatedTodo = await prisma.todo.update({ where: { id: todoId }, data: { ...todoData } })

    res.status(200).json({ data: updatedTodo })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

export const deleteTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const todoId = req.params.id
    const deletedTodo = await prisma.todo.delete({ where: { id: todoId } })

    res.status(200).json({ message: 'Successfully deleted', data: deletedTodo })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' })
  }
}
