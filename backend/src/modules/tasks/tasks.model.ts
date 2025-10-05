import type { TasksCreateSchema } from './tasks-schemas.ts'

export class Task {
  id: string
  userId: string = '1'
  title: string
  boardId: string
  listId: string
  order: number = 0
  createdAt: Date
  description: string = ''

  constructor(payload: TasksCreateSchema) {
    this.id = crypto.randomUUID()
    this.title = payload.title
    this.boardId = payload.boardId
    this.listId = payload.listId
    this.createdAt = new Date()
  }

  setDescription(description: string) {
    this.description = description
  }

  setOrder(order: number) {
    this.order = order
  }
}
