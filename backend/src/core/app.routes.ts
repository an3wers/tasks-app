import { router } from './trpc.ts'
import { tasksRouter } from '../modules/tasks/tasks.routes.ts'

export const appRouter = router({
  tasks: tasksRouter,
})

export type AppRouter = typeof appRouter
