const { Router } = require("express");
const pruebaRoute = require("../routes/pruebaRoute");

const router = Router();

router.use("/", pruebaRoute);

//quiero que ande la ruta
module.exports = router;
