import express from "express";
import { Request, Response } from "express";
import prisma from "../../db";
import { filterById } from "../../controllers/filterByIdController/filterByIdController";
import { allExcercices } from "../../controllers/allExcercisesController/allExcercisesController";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allExcercises = await allExcercices();
    res.status(200).send(allExcercises);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const idExcercise = await filterById(id);
    res.json(idExcercise);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error when filtering exercises" });
  }
});
module.exports = router;
