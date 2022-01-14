const express = require('express');
const router = express.Router();

module.exports = (db) => {
  const queryGenerator = require("../db/queryHelpers");
  const { createNewOrganization, addUserToOrganization } = queryGenerator(db);

  router.post("/", async (req, res) => {
    const { user_id } = req.session;

    try {
      const newOrganization = await createNewOrganization({ ...req.body });
      await addUserToOrganization(user_id, newOrganization.id, true);
      res.json(newOrganization);
    } catch (err) {
      console.log(err.message);
    };

  });

  return router;
};