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

  const generateAccessToken = (req, res) => {
    // Set Response Header
    res.header("Access-Control-Allow-Origin", "*");
    // Get the channel name
    const channelName = req.query.channelName;
    // get uid
    if (!channelName) return res.status(500).json({
      error:"Missing channel name."
    })
    // get role
    


    // get expiration time for token

    // build the token


    // return token
  };

  router.get("/", nocache, generateAccessToken);

  return router;
};