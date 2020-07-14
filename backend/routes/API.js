var express = require("express");
var router = express.Router();
var studentmodel = require("../models/StudentModel");
//--------------------DATABASE--------------------

//----------------API-------------------
router.get("/", (req, res) => {
  res.send("Hello from API");
});
router.post("/getAllStudent", (req, res) => {
  console.log("Get all Student");
  studentmodel.getAllStudent(res);
});
router.post("/describestudent", (req, res) => {
  console.log("describe Student");
  studentmodel.describeTable(res);
});
router.post("/addStudent", (req, res) => {
  console.log("Adding new Student");
  studentmodel.addStudent("Luby", "Heal", "F");
  res.statusCode(200).send();
});

module.exports = router;
