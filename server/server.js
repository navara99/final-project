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

//login route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  // find user with email
  const data = await db.query('SELECT * FROM users WHERE email = $1;',[`${email}`]);
  const user = data.rows[0];
    //if user not there
    if (!user) {
      return res.status(401).json({message : "Email doesn't exists"});
    }
    // // compare provided password
    if(user.password !== password) {
      return res.status(401).json({message : "Password doesn't match"});
    }
    // // assign session_id
    // req.session.user_id = user.id;
    res.status(200).json(user);
})
const usersRoutes = require("./routes/users");

app.use("/api/users", usersRoutes(db));

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
