/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");

module.exports = (db) => {
  const queryGenerator = require("../db/queryHelpers");
  const { createNewUser } = queryGenerator(db);

  router.post("/register", async (req, res) => {
    const { firstName, lastName, email, username, password, confirmPassword } = req.body;

    try {
      const passwordIsSame = confirmPassword === password;
      if (!passwordIsSame) {
        return res.status(400).json({ error: "Passwords do not match." });
      };

      const userWithSameUsername = await getUserByValue("username", username);

      if (userWithSameUsername) {
        return res.status(400).json({ error: "This username is already taken." });
      };

      const hashedPassword = await bcrypt.hash(password, 12);
      const userInfo = { ...req.body, password: hashedPassword };
      const newUser = await createNewUser(userInfo);

      res.json(newUser);
    } catch (err) {
      console.log(err.message);
    }

  });

  return router;
};
