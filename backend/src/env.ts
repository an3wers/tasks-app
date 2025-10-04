import { config as dotenvConfig } from 'dotenv'

dotenvConfig()

export const config = {
  port: Number(process.env.PORT) || 5001,
}
