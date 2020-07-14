var sql = require("../db.js");

// var StudentModel = function (student) {
//   this.id = student.id;
//   this.name = student.name;
//   this.major = student.major;
//   this.sex = student.sex;
// };

describeTable = (result) => {
  sql.query("DESCRIBE students", (err, res) => {
    if (err) {
      throw err;
    }
    result.status(200).json({ object: res });
  });
};

getAllStudent = (result) => {
  sql.query("SELECT * FROM students", (err, res) => {
    if (err) {
      console.log("error GetallStudent: ", err);
      throw err;
      //   result(null, res);
    }
    result.status(200).json({
      object: res,
    });
  });
};
addStudent = (name, major, sex) => {
  sql.query(
    "INSERT INTO students(name,major,sex) VALUES('" +
      name +
      "','" +
      major +
      "','" +
      sex +
      "')",
    (err, res) => {
      if (err) throw err;
      console.log("NEW STUDENT ADD: " + name);
    }
  );
};
module.exports = { getAllStudent, describeTable, addStudent };
