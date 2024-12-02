"use strict";
const multer = require("multer");
const express = require("express");
const path = require("path");

module.exports = function (app) {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "../assets/"));
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  });

  const upload = multer({ storage: storage });

  app.use("/assets", express.static("assets"));

  const Controller = require("./Controllers/Controller");
  app.route("/Login").post(Controller.Login);
  app.route("/register").post(Controller.Register);
  app.route("/exists").post(Controller.Exists);

  app.route("/products").get(Controller.getProducts);

  app
    .route("/CreateProduct")
    .post(upload.single("image"), Controller.CreateProduct);

  app.route("/EditProduct").post(Controller.UpdateProduct);
  app.route("/Orders").post(Controller.Orders);
  app.route("/Ordertest").get(Controller.Ordertests);
};
