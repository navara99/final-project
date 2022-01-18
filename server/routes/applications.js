const express = require('express');
const router = express.Router();
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    console.log("raeched")
    cb(null, "./public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '_' + file.originalname);
  }
});
const upload = multer({ storage: storage, limits: { fieldSize: 10 * 1024 * 1024 } });

module.exports = (db) => {
  const queryGenerator = require("../db/queryHelpers");
  const { applyForJob } = queryGenerator(db);

  router.post("/", upload.single("resume"), async (req, res) => {
    const { user_id } = req.session;
    const { jobId, message } = req.body;
    console.log(jobId, message);
    console.log(req.body);
    try {
      console.log(req.file.path);
      res.json({
        status: "success"
      });
    } catch (err) {
      console.log(err.message);
    }

  });


  return router;
};