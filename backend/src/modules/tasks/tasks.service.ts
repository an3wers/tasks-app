export class TasksService {
  private readonly db: Array<Record<string, unknown>>

  constructor(db: Array<Record<string, unknown>>) {
    this.db = db
  }

  getTasks(boardId: string) {
    const tasks = this.db.filter((task) => task.boardId === boardId)

    if (tasks) {
      return tasks
    }
    return null
  }
}
