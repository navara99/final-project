const express = require('express');
const router = express.Router();

module.exports = (db) => {
  const queryGenerator = require("../db/queryHelpers");
  const {
    createNewOrganization,
    addUserToOrganization,
    getAllJobsByOrganizationId,
    getAllMembersByOrganizationId
  } = queryGenerator(db);

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

  router.post("/:id/users", async (req, res) => {
    const { usersIdToAdd } = req.body;

    try {
      await Promise.all(usersIdToAdd.map(async (id) => {
        return await addUserToOrganization(id, req.params.id, false);
      }));
      res.json({
        status: "success"
      });
    } catch (err) {
      console.log(err.message);
    }

  });

  router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const { user_id } = req.session;

    try {
      const jobs = await getAllJobsByOrganizationId(id);
      const members = await getAllMembersByOrganizationId(id);
      res.json({ jobs, members });
    } catch (err) {
      console.log(err.message);
    };

  });

  return router;
};