var sql = require("../db.js");

var Name = function(name) {
  this.name = name.name;
  this.ethnicity = name.ethnicity;
  this.YearOfName = name.YearOfName;
  this.NameCount = name.NameCount;
  this.gender = name.gender;
  this.NameRank = name.NameRank;
  this.Ratings = name.Ratings;
};

Name.getAllName = function getAllName(result) {
  sql.query("select * from FavNameList", function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("names : ", res);
      result(null, res);
    }
  });
};

Name.getNameById = function getTaskById(id, result) {
  sql.query("Select * from FavNameList where id= ?", id, function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Name.getDetailByName = function getDetailByName(name, result) {
  sql.query("Select * from FavNameList where name= ?", name, function(
    err,
    res
  ) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Name.getNameByYear = function getNameByYear(year, result) {
  sql.query("Select * from FavNameList where YearOfName= ?", year, function(
    err,
    res
  ) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

module.exports = Name;
