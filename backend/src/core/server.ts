import express, { type Express } from 'express'
import * as trpcExpress from '@trpc/server/adapters/express'
import { appRouter } from './app.routes.ts'
import cors from 'cors'
import { config } from '../env.ts'

const app: Express = express()

app.use(
  cors({
    origin: config.origin,
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
