import { router, publicProcedure } from '../trpc.ts'
import { taskRouter } from './task.routes.ts'

export const appRouter = router({
  task: taskRouter,
})

export type AppRouter = typeof appRouter
