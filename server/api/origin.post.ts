import { PrismaClient } from '@prisma/client'

// Inicializa el cliente de Prisma
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    // Obtén el contenido del cuerpo de la petición (FormData)
	  const originData   = await readFormData(event);

    const name :string        = originData.get('name')            as string ?? ''
    const description :string = originData.get('description')     as string ?? ''
    const msnm :number        = parseInt(originData.get('msnm')   as string ?? '0')  
    const cityId :number      = parseInt(originData.get('cityId') as string ?? '0')
    


    // Crear el nuevo registro en la base de datos
    const newOrigin = await prisma.origin.create({
      data: {
        name:        name,
        description: description,
        msnm:        msnm,
        cityId:      cityId
      },
    })

    // Retorna una respuesta de éxito
    return {
      success: true,
      data:    newOrigin,
    }

  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    }
  }
})
