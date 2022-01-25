const express = require('express');
const router = express.Router();

module.exports = (db) => {
  const queryGenerator = require("../db/queryHelpers");
  const { addJobToOrganization, getJobsBySearch, getAllApplicationsByJobId, getJobById, toggleLikes } = queryGenerator(db);

  router.post("/:id/like", async (req, res) => {
    const { id } = req.params;
    const { user_id } = req.session;

    try {
      await toggleLikes(user_id, id);
    } catch (err) {
      console.log(err.message);
    }


  });

  router.get(`/:id/applications`, async (req, res) => {
    const { id } = req.params;

    try {
      const applications = await getAllApplicationsByJobId(id);
      res.json(applications);
    } catch (err) {
      console.log(err.message);
    };

  });

  router.post("/", async (req, res) => {
    const { organizationId } = req.body;

    try {
      const newJob = await addJobToOrganization(organizationId, req.body);
      res.json(newJob);
    } catch (err) {
      console.log(err.message);
    };

  });

  router.get("/:id", async (req, res) => {
    const { id } = req.params;

    try {
      const jobs = await getJobById(id);
      res.json(jobs);
    } catch (err) {
      console.log(err.message);
    };

  });


  router.get("/", async (req, res) => {
    const { search } = req.query;
    const { user_id } = req.session;

    try {
      const jobs = await getJobsBySearch(search, user_id);
      res.json(jobs);
    } catch (err) {
      console.log(err.message);
    };

  });



  return router;
};