import type { TasksCreateSchema } from './tasks-schemas.ts'
import { Task } from './tasks.model.ts'

export class TasksService {
  private readonly db: Array<Record<string, unknown>>

  constructor(db: Array<Record<string, unknown>>) {
    this.db = db
  }

  getTasks(boardId: string) {
    const tasks = this.db.filter((task) => task.boardId === boardId)

    if (tasks.length) {
      return tasks
    }
    return null
  }

  createTask(payload: TasksCreateSchema) {
    const task = new Task(payload)

    task.setOrder(this.db.length + 1)
    this.db.push(task as unknown as Record<string, unknown>)

    return task
  }
}
