var Name = require("../model/appModel");

exports.list_all_names = function(req, res) {
  Name.getAllName(function(err, name) {
    console.log("controller");
    if (err) res.send("error happened" + err);
    console.log("res", name);

    res.send(name);
  });
};

exports.deatil_by_name = function(req, res) {
  Name.getDetailByName(req.params.name, function(err, name) {
    if (err) res.send(err);
    res.json(name);
  });
};

exports.read_single_name = function(req, res) {
  Name.getNameById(req.params.id, function(err, name) {
    if (err) res.send(err);
    res.json(name);
  });
};

exports.read_name_by_year = function(req, res) {
  Name.getNameByYear(req.params.year, function(err, name) {
    if (err) res.send(err);
    res.json(name);
  });
};
