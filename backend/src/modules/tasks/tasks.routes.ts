import z from 'zod'
import { tasks } from '../../mock-db.ts'
import { router, publicProcedure } from '../../core/trpc.ts'
import { TasksService } from './tasks.service.ts'
import { tasksCreateSchema, tasksListSchema } from './tasks-schemas.ts'

export const tasksRouter = router({
  // Получить список задач
  list: publicProcedure.input(tasksListSchema).query(({ input }) => {
    const data = new TasksService(tasks).getTasks(input.boardId)

    // TODO: Обработать ошибку, если нет данных
    if (data) {
      return data
    }
    return null
  }),
  // TODO: Получить детальную информацию о задаче

  // TODO: Добавить задачу
  create: publicProcedure.input(tasksCreateSchema).mutation(({ input }) => {
    const data = new TasksService(tasks).createTask(input)

    return data.id
  }),

  // TODO: Обновить задачу

  // TODO: Удалить задачу
})
