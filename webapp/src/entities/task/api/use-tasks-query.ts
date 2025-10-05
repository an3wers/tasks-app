import { useQuery } from '@tanstack/react-query'
import { trpc } from '@/utils/trpc'

export const useTasksQuery = ({ boardId }: { boardId: string }) => {
  return useQuery(trpc.tasks.list.queryOptions({ boardId }))
}
