const express = require('express');
const router = express.Router();
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "./public/uploads/");
  },
  filename: function (req, file, cb) {
    console.log(Date.now());
    cb(null, Date.now() + '_' + file.originalname);
  }
});
const upload = multer({ storage });


module.exports = (db) => {
  const queryGenerator = require("../db/queryHelpers");
  const { applyForJob } = queryGenerator(db);

  router.post("/", upload.single("resume"), async (req, res) => {
    const { user_id } = req.session;
    const { jobId, message } = req.body;
    console.log(jobId, message);
    try {
      console.log(req.file);
      res.json({
        status: "success"
      });
    } catch (err) {
      console.log(err.message);
    }

  });


  return router;
};