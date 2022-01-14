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
  const { createNewUser, getUserByValue } = queryGenerator(db);

  router.post("/register", async (req, res) => {
    const { email, username, password, confirmPassword } = req.body;

    try {
      const passwordIsSame = confirmPassword === password;
      if (!passwordIsSame) {
        return res.json({ error: "Passwords do not match." });
      };

      const userWithSameUsername = await getUserByValue("username", username);

      if (userWithSameUsername) {
        return res.json({ error: "This username is already taken." });
      };

      const userWithSameEmail = await getUserByValue("email", email);

      if (userWithSameEmail) {
        return res.json({ error: "This email is already taken." });
      };

      const hashedPassword = await bcrypt.hash(password, 12);
      const userInfo = { ...req.body, password: hashedPassword };
      const newUser = await createNewUser(userInfo);
      req.session.user_id = newUser.id;
      res.json(newUser);
    } catch (err) {
      console.log(err.message);
    }

  });

  app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const data = await getUserByValue("email", email);
    const user = data.rows[0];

    try {
      if (!user) return res.json({ error: "Email doesn't exists. Please create a new account." });

      const correctPassword = await bcrypt.compare(password, user.password);
      if (!correctPassword) return res.json({ error: "Incorrect credentials." });

      req.session.user_id = user.id;
      res.json(user);

    } catch (err) {
      console.log(err);
    };

    res.status(200).json(user);
  });

  return router;
};
