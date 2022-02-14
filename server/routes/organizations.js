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
    deleteOrganizationById,
    updateOrganizationInfo,
    getOrganizationsByUser
  } = queryGenerator(db);

  router.delete("/:id", async (req, res) => {
    const { id } = req.params;

    try {
      await deleteOrganizationById(id);
      res.json({
        status: "success"
      });
    } catch (err) {
      console.log(err.message);
    };

  });

  router.put("/:id", async (req, res) => {
    const { user_id } = req.session;
    const { id } = req.params;
    const { name, description, email, industry, website, logo } = req.body;

    try {
      await updateOrganizationInfo(id, name, description, email, industry, website, logo);
      const updatedOrganizations = await getOrganizationsByUser(user_id);
      console.log(updatedOrganizations);
      res.json(updatedOrganizations);
    } catch (err) {
      console.log(err.message);
    }


  });

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

  router.post("/:id/leave", async (req, res) => {
    const { user_id } = req.session;
    const { id } = req.params;

    console.log(user_id, "wants to leave", id);

    // try {
    //   const result = await checkIfIAmMember(id, user_id);
    //   res.json({ isMember: result });
    // } catch (err) {
    //   console.log(err.message);
    // }

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

  router.get("/jobs/:id", async (req, res) => {
    const { id } = req.params;
    console.log("==================================")
    try {
      const jobs = await getAllJobsByOrganizationId(id, true);
      console.log(jobs);
      res.json(jobs);
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
