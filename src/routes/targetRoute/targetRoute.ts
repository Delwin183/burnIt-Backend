import { filterByTarget } from "../../controllers/filterByTargetController/filterByTargetController";
import express from "express";
import { Request, Response } from "express";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  const { target } = req.body;
  try {
    const Excercise = await filterByTarget(target);
    res.json(Excercise);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error when filtering exercises" });
  }
});

module.exports = router;
