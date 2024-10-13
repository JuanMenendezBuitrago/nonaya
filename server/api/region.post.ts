import { PrismaClient } from '@prisma/client'

// Inicializa el cliente de Prisma
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    // Obtén el contenido del cuerpo de la petición (FormData)
	const regionData = await readFormData(event);

    const name: string      = regionData.get('name') as string ?? ''
    const countryId: number = parseInt(regionData.get('countryId') as string ?? '0')


    // Crear el nuevo registro en la base de datos
    const newRegion = await prisma.region.create({
      data: {
        name:         name,
        countryId:    countryId
      },
    })

    // Retorna una respuesta de éxito
    return {
      success: true,
      data:    newRegion,
    }
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    }
  }
})
