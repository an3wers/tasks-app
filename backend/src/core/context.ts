import { PrismaClient } from '@prisma/client'

export const createContext = async () => {
  const prisma = new PrismaClient()

  console.log('Creating context called')
  return {
    prisma,
    stop: async () => {
      await prisma.$disconnect()
    },
  }
}

export type AppContext = Awaited<ReturnType<typeof createContext>>
