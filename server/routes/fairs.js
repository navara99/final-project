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
  const {
    getAllFairs,
    getFairDetails,
    addFairToSchedule,
    getUserOrganizations,
    addFairToOrganizationSchedule,
  } = queryGenerator(db);

  router.get("/", async (req, res) => {
    try {
      const fairs = await getAllFairs();
      const fairsWithValidDate = fairs.map((fair) => {
        const { start_time, end_time } = fair;
        const start = new Date(Date.parse(start_time));
        const end = new Date(Date.parse(end_time));
        delete fair.start_time;
        delete fair.end_time;
        return { ...fair, start, end };
      });

      const past = fairsWithValidDate
        .filter(({ end }) => end < Date.now())
        .sort((a, b) => {
          return b.start - a.start;
        });

      const ongoing = fairsWithValidDate
        .filter(({ end, start }) => {
          return end > Date.now() && start < Date.now();
        })
        .sort((a, b) => {
          return b.end - a.end;
        });

      const upcoming = fairsWithValidDate
        .filter(({ start }) => start > Date.now())
        .sort((a, b) => {
          return a.start - b.start;
        });

      res.json({ past, ongoing, upcoming });
    } catch (e) {
      console.log(e);
    }
  });

  router.post(
    "/join/:fair_id/organizations/:organization_id",
    async (req, res) => {
      const { fair_id, organization_id } = req.params;

      try {
        const data = await addFairToOrganizationSchedule(
          fair_id,
          organization_id
        );
        console.log(data);
        res.json(data);
      } catch (error) {
        console.log(error);
      }
    }
  );

  router.post("/join/:id/", async (req, res) => {
    const { id } = req.params;
    const { user_id } = req.session;

    try {
      const data = await addFairToSchedule(id, user_id);
      res.json(data);
    } catch (error) {
      console.log(error);
    }
  });

  router.get("/organizations/:id", async (req, res) => {
    const { user_id } = req.session;
    const { id } = req.params;

    try {
      const organizations = await getUserOrganizations(id, user_id);

      res.json(organizations);
    } catch (err) {
      console.log(err.message);
    }
  });

  router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const { user_id } = req.session;

    try {
      const data = await getFairDetails(id, user_id);
      res.json(data);
    } catch (error) {
      console.log(error);
    }
  });

  return router;
};
