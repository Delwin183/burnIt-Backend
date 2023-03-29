import express from "express";
import { Request, Response } from "express";
import prisma from "../../db";

const router = express.Router();

import seedExcercicesData from "../../controllers/seedExcercicesDataController/seedExcercicesDataController";

// Ruta para insertar objetos en la base de datos

router.post("/exercises", async (req: Request, res: Response) => {
  try {
    console.log("Starting seed of exercises data...");
    res.status(200).send("Starting seed of exercises data...");
    await seedExcercicesData(req, res);
    console.log("Exercise data seeding completed!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error while seeding database.");
  } finally {
    await prisma.$disconnect();
  }
});

module.exports = router;
