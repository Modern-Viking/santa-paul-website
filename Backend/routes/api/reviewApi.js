const router = require("express").Router();
const reviewController = require("../../controllers/reviewController");

router.route("/")
    .get(reviewController.findAll)
    .post(reviewController.create);

router.route("/:id")
  .get(reviewController.findById)
  .put(reviewController.update)
  .delete(reviewController.remove);

    module.exports = router;