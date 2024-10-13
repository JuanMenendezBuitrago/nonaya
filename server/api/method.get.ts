// /server/api/method.get.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const methods = await prisma.method.findMany()
    return methods
  } catch (error) {
    return { error: 'Error al obtener los métodos', details: error }
  }
})
