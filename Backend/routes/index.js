var path = require("path")
const router = require("express").Router();
const api = require("./apiRoutes")

router.use("/apiRoutes", api);

router.use( function (req,res) {
    res.sendFile(path.join(__dirname, './client/public/index.html'));
});

module.exports = router;