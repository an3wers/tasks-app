import { useTasksQuery } from './use-tasks-query'

export const TasksList = () => {
  const tasks = useTasksQuery()
  return (
    <div>
      <p>Tasks List</p>

      <div>{JSON.stringify(tasks.data)}</div>
    </div>
  )
}
