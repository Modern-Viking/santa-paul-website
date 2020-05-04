const router = require("express").Router();
const reviewRoutes = require("./reviewApi");

router.use("/reviewApi", reviewRoutes);


module.exports = router;