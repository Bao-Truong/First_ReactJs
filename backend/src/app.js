const express = require("express");
const app = express();
var request = require("request");
const port = 3001;
var APIRouter = require("../routes/API");

/// MIDDLEWARE
app.use("/api", APIRouter);

// DATABASE

app.get("/", (req, res) => res.send("Hello world"));

app.get("/getWeather", (req, res) => {
  console.log("Called");
  request(
    "http://api.weatherstack.com/current?access_key=312f93a92e677742e26b888fb5fda693&query=toronto",
    function (error, respond, body) {
      if (!error) {
        console.log(body);
        var parsedBody = JSON.parse(body);
        var temp_c = parsedBody["current"]["temperature"];
        res.send({ temp_c });
      }
    }
  );
  console.log("state completed");
});

app.listen(port, () => console.log("Listening to port " + port));
