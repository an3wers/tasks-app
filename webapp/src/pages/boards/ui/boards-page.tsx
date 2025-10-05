import { Link } from '@tanstack/react-router'

export const BoardsPage = () => {
  return (
    <div>
      <h1>BoardsPage</h1>
      <ul>
        <li>
          <Link to="/boards/$boardId" params={{ boardId: '1' }}>
            Board 1
          </Link>
        </li>
      </ul>
    </div>
  )
}
