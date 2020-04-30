const router = require("express").Router();
const reviewsApi = require("./reviewApi");


router.use("/reviewApi", reviewsApi);


module.exports = router;