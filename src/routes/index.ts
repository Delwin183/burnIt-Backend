const { Router } = require("express");
import seedExcercicesDataRoute = require("./seedExcercicesDataRoute/seedExcercicesDataRoute");
import bodyPartRoute = require("./bodyPartRoute/bodyPartRoute");
import equipmentRoute = require("./equipmentRoute/equipmentRoute");
import excercisesRoute = require("./excercisesRoute/excercisesRoute");
import targetRoute = require("./targetRoute/targetRoute");
const router = Router();

router.use("/seed", seedExcercicesDataRoute); // Ruta solo utilizada para la insercion de Datos en la DB (Usar solo en backend)
router.use("/bodypart", bodyPartRoute);
router.use("/equipment", equipmentRoute);
router.use("/", excercisesRoute);
router.use("/target", targetRoute);

export default router;
