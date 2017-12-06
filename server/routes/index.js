var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
    res.render("index.html");
});

router.get("/privacy", function (req, res) {
    res.render("privacypolicy.html");
});

module.exports = router;