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
      const fairsWithValidDate = fairs.map((fair) => {
        const { start_time, end_time } = fair;
        const parsedStart = Date.parse(start_time);
        const parsedEnd = Date.parse(end_time);
        return { ...fair, start_time: parsedStart, end_time: parsedEnd };
      });
      const past = fairsWithValidDate.filter(
        ({ end_time }) => end_time < Date.now()
      );
      const ongoing = fairsWithValidDate.filter(({ end_time, start_time }) => {
        return end_time > Date.now() && start_time < Date.now();
      });
      const upcoming = fairsWithValidDate.filter(
        ({ start_time }) => start_time > Date.now()
      );
      res.json({past, ongoing, upcoming});
    } catch (e) {
      console.log(e);
    }
  });

  return router;
};
