import z from 'zod'
import { tasks } from '../../mock-db.ts'
import { router, publicProcedure } from '../../core/trpc.ts'
import { TasksService } from './tasks.service.ts'

const tasksListSchema = z.object({
  boardId: z.string(),
})

export const tasksRouter = router({
  list: publicProcedure.input(tasksListSchema).query(({ input }) => {
    const data = new TasksService(tasks).getTasks(input.boardId)

    if (data) {
      return data
    }
    return null
  }),
})
