const express = require("express");
const router = express.Router();

var path = require("path");
var nameList = require("../controller/appController");

global.appRoot = path.resolve("./");

// router for various input
router.route("/").get(function(req, res) {
  let __dirname = "";
  // res.send("this is the login form");
  res.sendFile(appRoot + "/index.html");
  //res.sendFile("../index.html");
});

router.route("/names").get(nameList.list_all_names);

router.route("/names/:id").get(nameList.read_single_name);

router.route("/names/:?year").get(nameList.read_name_by_year);

router.route("/singlename/:name").get(nameList.deatil_by_name);

module.exports = router;
