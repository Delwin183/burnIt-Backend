import express from "express";
import { Request, Response } from "express";
import prisma from "../../db";
import { filterByEquipment } from "../../controllers/equipmentController/equipmentController";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  const { equipment } = req.body;
  try {
    const filteredExercises = await filterByEquipment(equipment);
    res.json(filteredExercises);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error when filtering exercises" });
  }
});
module.exports = router;
