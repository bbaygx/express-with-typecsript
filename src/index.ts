import express, { type Application } from 'express'
import morganMiddleware from './config/morganMiddleware'
import 'dotenv/config'

const app: Application = express()
const PORT: number = parseInt(process.env.PORT ?? '3000')

app.use(morganMiddleware)

app.get('/api/v1', (req, res) => {
  res.json({
    message: 'Hello, world!'
  })
})

app.listen(PORT, function () {
  console.log(`Server listening on ${PORT}`)
})
