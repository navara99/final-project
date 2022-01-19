const express = require('express');
const router = express.Router();

module.exports = (db) => {
  const queryGenerator = require("../db/queryHelpers");
  const { addJobToOrganization, getJobsBySearch, getApplicationsFromJobId } = queryGenerator(db);

  router.get(`/:id/applications`, async (req, res) => {
    const { id } = req.params;
    console.log(id);
    try {
      const applications = await getApplicationsFromJobId(id);
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