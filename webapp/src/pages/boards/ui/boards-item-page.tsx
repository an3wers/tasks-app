import { useTasksQuery } from '@/entities/task'
import { useParams } from '@tanstack/react-router'

export const BoardsItemPage = () => {
  const { boardId } = useParams({ strict: false })

  if (!boardId) {
    throw new Error('Board ID is required')
  }

  const { data, isLoading, isFetching, isError } = useTasksQuery({ boardId })

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
