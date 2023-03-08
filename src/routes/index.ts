const { Router } = require("express");
import pruebaRoute = require("../routes/pruebaRoute");

const router = Router();

router.use("/", pruebaRoute);

module.exports = router;
