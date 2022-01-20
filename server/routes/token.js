const express = require('express');
const router = express.Router();
const { RtcTokenBuilder, RtcRole } = require("agora-access-token");

const appId = "7fbb0d7a140c49ddb9a80357e303fb88";
const appCertificate = "4c496eaf63764f139ed3e48bf701bb1f";

module.exports = () => {

  const nocache = (req, res, next) => {
    res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
    res.header("Expires", "-1");
    res.header("Pragma", "no-cache");
    next();
  };

  router.get("/", async (req, res) => {
    res.send("hi");
  });

  return router;
};