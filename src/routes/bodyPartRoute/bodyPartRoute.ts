import express from "express";
import { Request, Response } from "express";
import prisma from "../../db";
import { filterByBodyPart } from "../../controllers/bodyPartController/bodyPartController";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  const { bodyPart } = req.body;
  try {
    const filteredExercises = await filterByBodyPart(bodyPart);
    res.json(filteredExercises);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error when filtering exercises" });
  }
});
module.exports = router;
