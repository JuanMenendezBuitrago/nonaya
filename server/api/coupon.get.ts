// /server/api/method.get.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const coupons = await prisma.coupon.findMany()
    return coupons
  } catch (error) {
    return { error: 'Error al obtener los métodos', details: error }
  }
})
