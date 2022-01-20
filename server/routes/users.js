/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const salt = 12;
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "./public/users_resume");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '_' + file.originalname);
  }
});
const upload = multer({ storage: storage, limits: { fieldSize: 10 * 1024 * 1024 } });
module.exports = (db) => {
  const queryGenerator = require("../db/queryHelpers");
  const { createNewUser, getUserByValue, getOrganizationsByUser, getAllOtherUsers,updateUser,updatePasswordById } = queryGenerator(db);

  router.get("/", async (req, res) => {
    const { user_id } = req.session;

    try {
      const users = await getAllOtherUsers(user_id);
      console.log(users);
      res.json(users);
    } catch (err) {
      console.log(err.message);
    }

  });

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

  router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {

      const user = await getUserByValue("email", email);

      if (!user) return res.json({ error: "Email doesn't exists. Please create a new account." });

      const correctPassword = await bcrypt.compare(password, user.password);

      if (!correctPassword) {
        return res.json({ error: "Incorrect credentials." });
      };

      req.session.user_id = user.id;
      res.json(user);
    } catch (err) {
      console.log(err);
    };

  });

  router.post("/logout", (req, res) => {
    req.session = null;
    res.json({});
  });

  router.get("/me", async (req, res) => {
    const { user_id } = req.session;
    if (!user_id) return res.json({});

    try {
      const userInfo = await getUserByValue("id", user_id);
      res.json(userInfo);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }

  });

  router.get("/me/organizations", async (req, res) => {
    const { user_id } = req.session;

    try {
      const organizations = await getOrganizationsByUser(user_id);
      res.json(organizations);
    } catch (err) {
      console.log(err.message);
    };

  });
  //Edit User Route
  router.post("/edit", upload.single("resume"),async (req,res) => {
      console.log("body", req.body);
      const userId = req.session.user_id;
      const { username, email } = req.body;
      const filePath = req.file.path;
      
      try {
        //check if username is not empty
        const userWithSameUsername = await getUserByValue("username", username);
  
        if (userWithSameUsername && userWithSameUsername.id !== userId) {
          return res
            .status(400)
            .json({ error: "This username is already taken." });
        }
  
        const userWithSameEmail = await getUserByValue("email", email);
  
        if (userWithSameEmail && userWithSameEmail.id !== userId) {
          return res.status(400).json({ error: "This email is already taken." });
        }
  
        const newUserInfo = { userId, ...req.body };
  
        const updatedInfo = await updateUser(newUserInfo);
       console.log("updateInfo", updatedInfo);
        res.json(updatedInfo);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }

  });

  // Edit password

  router.post("/password", async(req, res) => {
    
    const { user_id } = req.session;
    console.log("geet req", user_id);
    const { currentPassword, newPassword, confirmPassword } = req.body;

    try {

      const user = await getUserByValue("id", user_id);

      const { password: hashedPassword } = user;

      const correctPassword = await bcrypt.compare(
        currentPassword,
        hashedPassword
      );

      if (!correctPassword) {
        return res
          .status(400)
          .json({ error: "Current password is incorrect." });
      }

      const newPasswordIsConfirmed = newPassword === confirmPassword;

      if (!newPasswordIsConfirmed) {
        return res
          .status(400)
          .json({ error: "Different inputs for new password." });
      }

      const sameNewAndOldPassword = currentPassword === newPassword;

      if (sameNewAndOldPassword) {
        return res
          .status(400)
          .json({ error: "The new password is same with the current password." });
      }

      const newHashedPassword = await bcrypt.hash(newPassword, salt);

      const newUserInfo = await updatePasswordById(user_id, newHashedPassword);

      res.json(newUserInfo);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  return router;
};
