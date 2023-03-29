import prisma from "../../db";
import { Request, Response } from "express";
import excercicesData from "../../excercises/excercises";
import ProgressBar from "progress";

// Función para insertar objetos en la base de datos
export default async function seedExcercicesData(req: Request, res: Response) {
  const bar = new ProgressBar("[:bar] :percent :etas", {
    total: excercicesData.length,
  });
  for (const data of excercicesData) {
    await prisma.excercises.create({
      data: {
        bodyPart: data.bodyPart,
        equipment: data.equipment,
        gifUrl: data.gifUrl,
        idName: data.idName,
        name: data.name,
        target: data.target,
      },
    });
    bar.tick();
  }
  console.log("Seeding completed.");
  prisma.$disconnect();
}
