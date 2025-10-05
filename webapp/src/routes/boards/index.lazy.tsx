import { BoardsPage } from '@/pages/boards'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/boards/')({
  component: Boards,
})

function Boards() {
  return <BoardsPage />
}
