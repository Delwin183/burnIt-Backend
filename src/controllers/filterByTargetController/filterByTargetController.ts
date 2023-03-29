import prisma from "../../db";

// Función para filtrar por name
export async function filterByTarget(target: string) {
  const excersiseBytarget = await prisma.excercises.findMany({
    where: {
      target: target,
    },
  });
  return excersiseBytarget;
}
