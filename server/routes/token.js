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
    if (!channelName) return res.status(500).json({
      error: "Missing channel name."
    })
    // get uid
    let uid = req.query.uid;
    if (!uid) uid = 0;
    // get role
    const role = RtcRole.SUBSCRIBER;
    if (req.query.role === "publisher") {
      role = RtcRole.PUBLISHER;
    };
    // get expiration time for token
    let expireTime = req.query.expireTime;
    if (!expireTime) {
      expireTime = 3600; // Default is an hour
    } else {
      expireTime = parseInt(expireTime, 10);
    }

    // Calculate privilege expire time
    const currentTime = Math.floor(Date.now() / 1000);
    const privilageExpireTime = currentTime + expireTime;
    // build the token
    const token = RtcTokenBuilder.buildTokenWithUid(appId, appCertificate, channelName, uid, role, privilageExpireTime);
    // return token
    res.json({ token });
  };

  router.get("/", nocache, generateAccessToken);

  return router;
};