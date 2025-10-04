import { resolve } from 'path'
import { router, publicProcedure } from '../trpc.ts'
// import { TRPCError } from '@trpc/server'

// Mock database
const tasks = new Map([
  [
    '1',
    {
      id: '1',
      title: 'Setup tRPC',
      description: 'Configure tRPC with Express',
      status: 'completed' as const,
      userId: '1',
      createdAt: new Date(),
    },
  ],
  [
    '2',
    {
      id: '2',
      title: 'Write documentation',
      description: 'Document API endpoints',
      status: 'pending' as const,
      userId: '1',
      createdAt: new Date(),
    },
  ],
])

export const taskRouter = router({
  list: publicProcedure.query(() => {
    return Array.from(tasks.values())
  }),
})
