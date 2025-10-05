import { useTasksQuery } from '@/entities/task'
import { useParams } from '@tanstack/react-router'

export const BoardsItemPage = () => {
  const { boardId } = useParams({ strict: false })
  const { data, isLoading, isFetching, isError } = useTasksQuery()

  return (
    <div>
      <h1>BoardsItemPage: {boardId}</h1>
      {isLoading && <p>Loading...</p>}
      {isFetching && <p>Fetching...</p>}
      {isError && <p>Error</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  )
}
