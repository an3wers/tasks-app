import { config } from './env.ts'
import app from './core/server.ts'

app.listen(config.port, () => {
  console.info(`Server running on port ${config.port}`)
})
