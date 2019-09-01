const express = require("express");
const router = express.Router();

var nameList = require("../controller/appController");

router.route("/names").get(nameList.list_all_names);

router.route("/names/:id").get(nameList.read_single_name);

router.route("/names/:?year").get(nameList.read_name_by_year);

module.exports = router;
