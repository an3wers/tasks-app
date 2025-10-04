import { config } from './env.ts'
import app from './server.ts'

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`)
})
