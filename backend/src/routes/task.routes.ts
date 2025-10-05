import { tasks } from '../mock-db.ts'
import { router, publicProcedure } from '../trpc.ts'

export const taskRouter = router({
  list: publicProcedure.query(() => {
    return tasks
  }),
})
