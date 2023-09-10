import express, { Request, Response } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import { startServer } from './utills/databaseConnection'
import { authenticateJWT } from './middleware/auth.middleware'
import { router } from "./routes";

const app = express()
const port = process.env.SERVER_PORT || 4000
const api = process.env.API_URL;

dotenv.config()
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))

startServer()

app.use(`${api}`, router);

app.listen(port, () => {
  console.log(`FeedAHelp Server listening at ${port}`)
})
