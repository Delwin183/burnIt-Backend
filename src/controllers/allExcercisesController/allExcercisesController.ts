import prisma from "../../db";

export async function allExcercices() {
  const allData = await prisma.excercises.findMany({});
  return allData;
}
