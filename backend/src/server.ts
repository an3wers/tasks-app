import express, { type Express } from 'express'
import * as trpcExpress from '@trpc/server/adapters/express'
import { appRouter } from './routes/index.ts'
import cors from 'cors'

const app: Express = express()

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
)

app.use(express.json())

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    service: 'Task app',
  })
})

// tRPC endpoint

app.use('/trpc', trpcExpress.createExpressMiddleware({ router: appRouter }))

export { app }

export default app
