// /server/api/method.get.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const regions = await prisma.region.findMany()
    return regions
  } catch (error) {
    return { error: 'Error al obtener los métodos', details: error }
  }
})
