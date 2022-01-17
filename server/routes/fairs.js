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
  const { getAllFairs, getFairDetails } = queryGenerator(db);

  router.get("/", async (req, res) => {
    try {
      const fairs = await getAllFairs();
      const fairsWithValidDate = fairs.map((fair) => {
        const { start_time, end_time } = fair;
        const parsedStart = Date.parse(start_time);
        const parsedEnd = Date.parse(end_time);
        return { ...fair, start_time: parsedStart, end_time: parsedEnd };
      });
      const past = fairsWithValidDate
        .filter(({ end_time }) => end_time < Date.now())
        .sort((a, b) => {
          return b.start_time - a.start_time;
        });

      const ongoing = fairsWithValidDate
        .filter(({ end_time, start_time }) => {
          return end_time > Date.now() && start_time < Date.now();
        })
        .sort((a, b) => {
          return b.end_time - a.end_time;
        });

      const upcoming = fairsWithValidDate
        .filter(({ start_time }) => start_time > Date.now())
        .sort((a, b) => {
          return a.start_time - b.start_time;
        });

      res.json({ past, ongoing, upcoming });
    } catch (e) {
      console.log(e);
    }
  });

  router.get("/:id", async (req, res) => {
    const { id }  = req.params;
    const { user_id } = req.session;

    try {
      const data = await getFairDetails(id, user_id);
      res.json(data);
    } catch (error) {
      console.log(error)
    }
  });

  return router;
};
