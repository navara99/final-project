// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const express = require("express");
const app = express();
const morgan = require("morgan");

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));

// app.use(express.static("public"));

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/test", (req, res) => {
  res.json({
    status:"success"
  })
})

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
