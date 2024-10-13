// /server/api/method.get.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Función para esperar un tiempo determinado (en milisegundos)
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export default defineEventHandler(async (event) => {
  try {
    // Intentar obtener los registros de coffee con un reintento
    const coffees = await fetchCoffeesWithRetry()
    return coffees
  } catch (error: any) {
    console.error('Error fetching coffees after retry:', error)
    
    // Lanzar un error si todos los intentos fallan
    throw createError({
      statusCode: 500,
      statusMessage: 'Error fetching coffees after retry',
      data: error.message,
    })
  }
})

// Función para realizar la consulta a Prisma y reintentar en caso de fallo
async function fetchCoffeesWithRetry(attempt = 1, maxAttempts = 2) {
  try {
    // Intentar la consulta a Prisma
    const coffees = await prisma.coffee.findMany()
    return coffees
  } catch (error) {
    console.error(`Attempt ${attempt} failed:`, error)

    // Si no se alcanzó el número máximo de intentos, esperar y reintentar
    if (attempt < maxAttempts) {
      console.log('Retrying after 0.5 seconds...')
      await delay(500) // Esperar 0.5 segundos
      return fetchCoffeesWithRetry(attempt + 1, maxAttempts) // Reintentar la consulta
    }

    // Si se alcanzó el número máximo de intentos, lanzar el error
    throw new Error('Failed to fetch coffees after retries')
  }
}
