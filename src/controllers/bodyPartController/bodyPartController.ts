import prisma from "../../db";

// Función para filtrar por bodyPart
export async function filterByBodyPart(part: string) {
  const getBodyParts = await prisma.excercises.findMany({
    where: {
      bodyPart: part,
    },
  });
  return getBodyParts;
}
