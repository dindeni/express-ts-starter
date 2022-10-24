import bodyParser from 'body-parser'
import express from 'express'
import rateLimit from 'express-rate-limit'
import helmet from 'helmet'

const app = express()

const limiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
})

// Express configuration
app.set('port', process.env.PORT || 5000)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(helmet())
app.use(limiter)

const port = app.get('port')
const server = app.listen(port, () =>
// eslint-disable-next-line no-console
  console.log(`Server started on port ${port}`)
)

export { server }
