import { PrismaClient } from '@prisma/client'

// Inicializa el cliente de Prisma
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    // Obtén el contenido del cuerpo de la petición (FormData)
	const cityData = await readFormData(event);

    const name: string      = cityData.get('name') as string ?? ''
    const regionId: number  = parseInt(cityData.get('regionId') as string ?? '0')


    // Crear el nuevo registro en la base de datos
    const newCity = await prisma.city.create({
      data: {
        name:        name,
        regionId:    regionId
      },
    })

    // Retorna una respuesta de éxito
    return {
      success: true,
      data:    newCity,
    }
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    }
  }
})
