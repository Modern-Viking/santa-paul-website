const router = require("express").Router();
const reviewController = require("../../controllers/reviewController");

router.route("/")
    .get(reviewController.findAll);

    module.exports = router;