import { BoardsItemPage } from '@/pages/boards'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/boards/$boardId')({
  component: BoardItem,
})

function BoardItem() {
  return <BoardsItemPage />
}
