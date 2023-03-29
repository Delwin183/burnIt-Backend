import prisma from "../../db";

// Función para filtrar por equipment
export async function filterByEquipment(equipment: string) {
  const getEquipment = await prisma.excercises.findMany({
    where: {
      equipment: equipment,
    },
  });
  return getEquipment;
}
