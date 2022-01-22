const express = require("express");
const router = express.Router();

module.exports = (db) => {
  const queryGenerator = require("../db/queryHelpers");
  const {
    createNewOrganization,
    addUserToOrganization,
    getAllJobsByOrganizationId,
    getAllMembersByOrganizationId,
    getAllFairsByOrganizationId,
    getOrganizationDetails,
    checkIfIAmMember,
  } = queryGenerator(db);

  router.post("/", async (req, res) => {
    const { user_id } = req.session;

    try {
      const newOrganization = await createNewOrganization({ ...req.body });
      await addUserToOrganization(user_id, newOrganization.id, true);
      res.json(newOrganization);
    } catch (err) {
      console.log(err.message);
    }
  });

  router.get("/:id/isMember", async (req, res) => {
    const { user_id } = req.session;
    const { id } = req.params;
    console.log("check")
    try {
      const result = await checkIfIAmMember(id, user_id);
      res.json({ isMember: result });
    } catch (err) {
      console.log(err.message);
    }

  })

  router.post("/:id/users", async (req, res) => {
    const { usersIdToAdd } = req.body;

    try {
      await Promise.all(usersIdToAdd.map(async (id) => {
        await addUserToOrganization(id, req.params.id, false);
      }));

      const members = await getAllMembersByOrganizationId(req.params.id);
      res.json(members);
    } catch (err) {
      console.log(err.message);
    }
  });

  router.get("/:id", async (req, res) => {
    const { user_id } = req.session;
    const { id } = req.params;

    try {
      const jobs = await getAllJobsByOrganizationId(id);
      const members = await getAllMembersByOrganizationId(id);
      const fairs = await getAllFairsByOrganizationId(id);
      const details = await getOrganizationDetails(id);
      const isMember = await checkIfIAmMember(id, user_id);

      res.json({ jobs, members, fairs, details, isMember });
    } catch (err) {
      console.log(err.message);
    }
  });



  return router;
};
