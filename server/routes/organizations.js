const express = require('express');
const router = express.Router();

module.exports = (db) => {
  const queryGenerator = require("../db/queryHelpers");
  const { } = queryGenerator(db);

  router.post("/", async (req, res) => {
    console.log(req.body);
  });

  return router;
};