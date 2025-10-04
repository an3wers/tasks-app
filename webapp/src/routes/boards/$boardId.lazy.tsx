import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/boards/$boardId')({
  component: BoardItem,
})

function BoardItem() {
  const { boardId } = Route.useParams()

  return <div>Hello {`/boards/${boardId}`}</div>
}
