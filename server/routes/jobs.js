const express = require('express');
const router = express.Router();

module.exports = (db) => {
  const queryGenerator = require("../db/queryHelpers");
  const { addJobToOrganization, getJobsBySearch, getAllApplicationsByJobId, getJobById } = queryGenerator(db);

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


  router.get("/:search?", async (req, res) => {
    const { search } = req.params;

    try {
      const jobs = await getJobsBySearch(search);
      res.json(jobs);
    } catch (err) {
      console.log(err.message);
    };

  });



  return router;
};