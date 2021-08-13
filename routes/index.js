const router = require("express").Router();

const apiRoutes = require("./api/");
const clientRoutes = require("./client/");

router.use("/", clientRoutes);
router.use("/api", apiRoutes);

module.exports = router;
