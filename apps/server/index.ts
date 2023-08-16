import express, { Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { startServer } from './utills/databaseConnection'
import { authenticateJWT } from './middleware/auth.middleware'
import todoRouter from './routes/todo.router'
import authRouter from './routes/auth.router'
import userRouter from './routes/user.router'

const app = express()
const port = process.env.PORT || 3020

dotenv.config()
app.use(cors())
app.use(express.json())

startServer()
// Middleware to apply globally, excluding the authentication route
app.use((req, res, next) => {
  if (req.path === '/auth/register' || req.path === '/auth/login') {
    // Skip authentication middleware for the /auth route
    next()
  } else {
    authenticateJWT(req, res, next)
  }
})

app.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    res.status(200).json('WELCOME TO EMACH SERVER')
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
})
app.use('/auth', authRouter)
app.use('/user', userRouter)
app.use('/todo', todoRouter)

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
