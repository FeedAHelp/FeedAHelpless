import express, { Request, Response } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import { startServer } from './utills/databaseConnection'
import { authenticateJWT } from './middleware/auth.middleware'
import authRouter from './routes/auth.router'
import userRouter from './routes/user.router'
import subscribeRouter from './routes/subscribe.route'

const app = express()
const port = process.env.PORT || 3020

dotenv.config()
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))

startServer()

app.use(subscribeRouter)

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
    res.status(200).json('WELCOME TO FEEDAHELP SERVER')
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
})
app.use('/auth', authRouter)
app.use('/user', userRouter)

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
