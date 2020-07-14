var mysql = require("mysql");

var con = mysql.createConnection({
  host: "",
  port: 3306,
  user: "root",
  password: "bao123bao",
  database: "Webserver",
  insecureAuth: true,
});

con.connect((err) => {
  if (err) throw err;
  console.log("database connected");
});

module.exports = con;
