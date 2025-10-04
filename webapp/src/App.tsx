import './App.css'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '../utils/trpc'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { TasksList } from './entities/task'

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <TasksList />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
