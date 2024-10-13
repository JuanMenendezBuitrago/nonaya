// /server/api/method.get.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const origins = await prisma.origin.findMany()
    return origins
  } catch (error) {
    return { error: 'Error al obtener los origenes', details: error }
  }
})
