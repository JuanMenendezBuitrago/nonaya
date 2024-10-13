import { PrismaClient } from '@prisma/client'

// Inicializa el cliente de Prisma
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    // Obtén el contenido del cuerpo de la petición (FormData)
	const coffeeData    = await readFormData(event);
    const name: string        = coffeeData.get('name') as string ?? ''
    const description: string = coffeeData.get('description') as string ?? ''
    const varietyId: number   = parseInt(coffeeData.get('varietyId') as string ?? '0')
    const originId: number    = parseInt(coffeeData.get('originId') as string ?? '0')
    const processId: number   = parseInt(coffeeData.get('processId') as string ?? '0')


    // Crear el nuevo registro en la base de datos
    const newCoffee = await prisma.coffee.create({
      data: {
        name:        name,
        description: description,
        varietyId:   varietyId, // Asegurarse de convertir los IDs a números
        originId:    originId,
        processId:   processId,
      },
    })

    // Retorna una respuesta de éxito
    return {
      success: true,
      coffee: newCoffee,
    }
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    }
  }
})
