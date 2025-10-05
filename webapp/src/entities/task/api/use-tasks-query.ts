import { useQuery } from '@tanstack/react-query'
import { trpc } from '@/utils/trpc'

export const useTasksQuery = () => {
  return useQuery(trpc.task.list.queryOptions())
}
