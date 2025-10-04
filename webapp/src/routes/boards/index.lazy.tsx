import { createLazyFileRoute, Link } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/boards/')({
  component: Boards,
})

function Boards() {
  return (
    <div>
      <h1>Hello Boards</h1>
      <ul>
        <li>
          <Link to="/boards/$boardId" params={{ boardId: '1' }}>
            Board 1
          </Link>
        </li>
        <li>
          <Link to="/boards/$boardId" params={{ boardId: '2' }}>
            Board 2
          </Link>
        </li>
        <li>
          <Link to="/boards/$boardId" params={{ boardId: '3' }}>
            Board 3
          </Link>
        </li>
      </ul>
    </div>
  )
}
