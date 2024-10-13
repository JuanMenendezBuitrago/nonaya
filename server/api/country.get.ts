// /server/api/method.get.ts
// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()

// export default defineEventHandler(async (event) => {
//   try {
//     const countries = await prisma.country.findMany()
//     return countries
//   } catch (error) {
//     return { error: 'Error al obtener los métodos', details: error }
//   }
// })


// /server/api/method.get.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const delay  = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export default defineEventHandler(async (event) => {
  try {
    const result = await fetchWithRetry()
    return result

  } catch (error: any) {

    console.error('Error fetching after retry:', error)
    
    // Lanzar un error si todos los intentos fallan
    throw createError({
      statusCode: 500,
      statusMessage: 'Error fetching after retry',
      data: error.message,
    })
  }
})

// Función para realizar la consulta a Prisma y reintentar en caso de fallo
async function fetchWithRetry(attempt = 1, maxAttempts = 3) {
  try {
    // Intentar la consulta a Prisma
    const result = await prisma.country.findMany()
    return result
  } catch (error) {
    console.error(`Attempt ${attempt} failed:`, error)

    // Si no se alcanzó el número máximo de intentos, esperar y reintentar
    if (attempt < maxAttempts) {
      console.log('Retrying after 0.5 seconds...')
      await delay(500) // Esperar 0.5 segundos
      return fetchWithRetry(attempt + 1, maxAttempts) // Reintentar la consulta
    }

    // Si se alcanzó el número máximo de intentos, lanzar el error
    throw new Error('Failed to fetch after retries')
  }
}
