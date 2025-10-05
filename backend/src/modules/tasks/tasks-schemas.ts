import z from 'zod'

export const tasksListSchema = z.object({
  boardId: z.string(),
})

export const tasksCreateSchema = z.object({
  title: z.string(),
  boardId: z.string(),
  listId: z.string(),
})

export type TasksCreateSchema = z.infer<typeof tasksCreateSchema>
export type TasksListSchema = z.infer<typeof tasksListSchema>
