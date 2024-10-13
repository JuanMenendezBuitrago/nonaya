import { PrismaClient } from '@prisma/client'

// Inicializa el cliente de Prisma
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    // Obtén el contenido del cuerpo de la petición (FormData)
	const countryData = await readFormData(event);

    const name: string      = countryData.get('name') as string ?? ''


    // Crear el nuevo registro en la base de datos
    const newCountry = await prisma.country.create({
      data: {
        name: name
      },
    })

    // Retorna una respuesta de éxito
    return {
      success: true,
      data:    newCountry,
    }
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    }
  }
})
