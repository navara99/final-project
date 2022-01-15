// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const express = require("express");
const app = express();
const morgan = require("morgan");

// Set up cookie-session
const cookieSession = require("cookie-session");
app.use(cookieSession({ secret: process.env.SECRET }));

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(express.static("public"));

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own

const usersRoutes = require("./routes/users");

app.use("/api/users", usersRoutes(db));
app.get("/api/fairs/:id",async (req,res) => {
  const fair_id = req.params.id;
  const values = [fair_id];
  const queryString = `
  SELECT 
  fairs.id as FairId, 
  fairs.description as FairDesc, 
  fairs.name as FairName, 
  fairs.poster as POSTER, 
  fairs.host_id as Host, 
  groups.id as GroupId, 
  groups.name as GroupName, 
  groups.description as GroupDesc 
  FROM fairs_groups 
  RIGHT JOIN fairs ON (fairs.id = $1) 
  JOIN groups ON (groups.id = group_id)
  `;
  const result = await db.query(queryString, values);
  console.log(result.rows[0])
  res.json(result.rows)
})
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
