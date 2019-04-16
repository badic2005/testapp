var express = require('express');
var WordsCtrl = require("./words.controller");

var router = express.Router();

// associate put, delete, and get(id)
router.route("/").get(WordsCtrl.apiGetWords);

exports = module.exports = router;
