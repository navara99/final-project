const express = require('express');
const router = express.Router();


module.exports = (db) => {
  const interviewQueryGenerator = require("../db/queryHelpers/interview");
  const { getInterviewById } = interviewQueryGenerator(db);

  router.get("/:id", async (req, res) => {
    const { user_id } = req.session;
    const { id } = req.params;

    try {
      const result = await getInterviewById(id);
      res.json({ ...result, interviewer: user_id === result.interviewer_id })
    } catch (err) {
      console.log(err.message);
    }

  });


  return router;
};