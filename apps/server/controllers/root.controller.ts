import { Request, Response } from 'express'

export const rootController = async (_req: Request, res: Response) => {
  try {
    res.status(200).json('WELCOME TO FEEDAHELP SERVER')
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
}

export default rootController
