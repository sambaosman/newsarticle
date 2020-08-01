var path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mockAPIResponse = require("./mockAPI.js");
const aylien = require("aylien_textapi");
const dotenv = require("dotenv");
dotenv.config();
const textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY,
});
console.log(process.env.API_KEY);

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("dist"));

console.log(__dirname);

app.get("/", function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve("dist/index.html"));
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
  console.log("App listening on port 8080!");
});

app.post("/article", function (req, res) {
  const { text } = req.body;
  console.log(text);
  textapi.sentiment({ url: text }, (error, result, remaining) => {
    if (!error) {
      console.log("Aylien Callback", result, remaining);
      res.send(result || ["solemn", "tactful", "interoperable"]);
    }
  });
});
