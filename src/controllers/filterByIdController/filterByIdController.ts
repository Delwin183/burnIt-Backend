import prisma from "../../db";

// Función para filtrar por id
export async function filterById(id: string) {
  const excersiseById = await prisma.excercises.findUnique({
    where: {
      id: id,
    },
  });
  return excersiseById;
}
