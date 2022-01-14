/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();

module.exports = (db) => {
  const queryGenerator = require("../db/queryHelpers");
  const { getAllFairs } = queryGenerator(db);

  router.get("/", async (req, res) => {
    try {
      const fairs = await getAllFairs();
      res.json(fairs);
    } catch (e) {
      console.log(e);
    }
  });

  return router;
};
