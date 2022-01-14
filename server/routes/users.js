/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();

module.exports = (db) => {

  router.post("/register", async (req, res) => {
    const { firstName, lastName, email, username, password, confirmPassword } = req.body;

    try {
      const passwordIsSame = confirmedPassword === password;
      if (!passwordIsSame) {
        return res.status(400).json({ error: "Passwords do not match." });
      };

    } catch (err) {

    }


    res.json({
      status: "logged-in"
    });
  });

  return router;
};
