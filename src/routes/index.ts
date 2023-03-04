const { Router } = require("express");
const pruebaRoute = require("../routes/pruebaRoute");

const router = Router();

router.use("/", pruebaRoute);


module.exports = router;
