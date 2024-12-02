"use strict";
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();

let PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

let routes = require("./api/router"); // importing route
routes(app);

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});
