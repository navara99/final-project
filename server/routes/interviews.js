const express = require('express');
const router = express.Router();


module.exports = (db) => {
  const queryGenerator = require("../db/queryHelpers");
  const { } = queryGenerator(db);

  router.get("/:id", async (req, res) => {
    


  });


  return router;
};