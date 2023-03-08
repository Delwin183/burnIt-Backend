import express from "express";
const router = express.Router();

import prueba from "../controllers/prueba";

router.get("/", async (req, res) => {
  try {
    const getprueba = await prueba();
    res.json(getprueba);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
