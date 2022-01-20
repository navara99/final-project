const express = require("express");
const router = express.Router();

module.exports = (db) => {
  const queryGenerator = require("../db/queryHelpers");
  const interviewQueryGenerator = require("../db/queryHelpers/interview");
  const { sendInterviewInvitation } = interviewQueryGenerator(db);
  const { getMessagesByUserId, createNewMessage } = queryGenerator(db);

  //Get All Messages for users
  router.get("/", async (req, res) => {
    try {
      const { user_id } = req.session;
      const { messagesArr, contacts } = await getMessagesByUserId(user_id);
      res.status(200).json({ messagesArr, contacts });
    } catch (error) {
      console.log(error);
    }
  });

  router.post("/", async (req, res) => {
    try {
      const newMessage = await createNewMessage(req.body);
      res.status(200).json(newMessage);
    } catch (error) {
      console.log(error);
    }
  });

  router.post("/interview", async (req, res) => {
    const { user_id } = req.session;
    const { start, end, applicationId, receiverId } = req.body;

    try {
      await sendInterviewInvitation(
        start,
        end,
        user_id,
        receiverId,
        applicationId
      );
      res.status(200).json({});
    } catch (error) {
      console.log(error);
    }
  });

  return router;
};
