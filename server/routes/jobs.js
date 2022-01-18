const express = require('express');
const router = express.Router();

module.exports = (db) => {
  const queryGenerator = require("../db/queryHelpers");
  const { addJobToOrganization, getJobsBySearch } = queryGenerator(db);

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