// /server/api/method.get.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const roasts = await prisma.roast.findMany()
    return roasts
  } catch (error) {
    return { error: 'Error al obtener los métodos', details: error }
  }
})
