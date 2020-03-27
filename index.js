const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const PORT = 3000;

//Init bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(req, res) {
  var html =
    `<p>Hello World</p>`;
  res.send(html);
});

app.listen(PORT, function() {
    console.log("Server listening on port:", PORT);
  });