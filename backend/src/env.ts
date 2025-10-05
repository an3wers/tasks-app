import { config as dotenvConfig } from 'dotenv'

dotenvConfig()

export const config = {
  origin: process.env.ORIGIN || 'http://localhost:5173',
  port: Number(process.env.PORT) || 5001,
}
