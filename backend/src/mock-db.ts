export const tasks = [
  {
    id: '1',
    title: 'Setup tRPC',
    description: 'Configure tRPC with Express',
    userId: '1',
    listId: '2',
    boardId: '1',
    order: 1,
    createdAt: new Date(),
  },
  {
    id: '2',
    title: 'Write documentation',
    description: 'Document API endpoints',
    userId: '1',
    listId: '1',
    boardId: '1',
    order: 1,
    createdAt: new Date(),
  },
  {
    id: '3',
    title: 'Implement authentication',
    description: 'Implement authentication with JWT',
    userId: '1',
    listId: '2',
    boardId: '1',
    order: 2,
    createdAt: new Date(),
  },
]

export const boards = [
  {
    id: '1',
    name: 'Board 1',
    description: 'Board 1 description',
    userId: '1',
    createdAt: new Date(),
  },
  {
    id: '2',
    name: 'Board 2',
    description: 'Board 2 description',
    userId: '1',
    createdAt: new Date(),
  },
]

export const lists = [
  {
    id: '1',
    name: 'Backlog',
    description: 'Backlog description',
    userId: '1',
    boardId: '1',
    order: 1,
    createdAt: new Date(),
  },
  {
    id: '2',
    name: 'In Progress',
    description: 'In Progress description',
    userId: '1',
    boardId: '1',
    order: 2,
    createdAt: new Date(),
  },
]
