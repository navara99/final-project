// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const express = require("express");
const app = express();
const morgan = require("morgan");

//SocketIo config
const { createServer } = require("http");
const { Server } = require("socket.io");
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

let users = [];

const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return users.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
  // console.log('a new user connected');
  // console.log("Connected socketId:", socket.id);

  //take userId and socketId from user
  socket.on("addUser", (userId) => {
    // console.log("currentUserId", userId);
    addUser(userId, socket.id);
    console.log("users", users);
    // io.emit("getUsers", users);
  });

  socket.on("sendMessage", ({ sender_id, receiver_id, message }) => {

    const user = getUser(receiver_id);
    // console.log("user", users);
    if (user) {

      io.to(user.socketId).emit("getMessage", {
        receiver_id,
        sender_id,
        message
      });
    } else {
      console.log("user not found", receiver_id);
    }
  });

  //client disconnect 
  socket.on("disconnect", () => {
    console.log("user disconnected!");
    removeUser(socket.id)
  })
})

// Set up cookie-session
const cookieSession = require("cookie-session");
app.use(cookieSession({ secret: process.env.SECRET }));

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/public", express.static(__dirname + "/public"));

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own

const usersRoutes = require("./routes/users");
const jobRoutes = require("./routes/jobs");
const fairsRoutes = require("./routes/fairs");
const organizationRoutes = require("./routes/organizations");
const messagesRoutes = require("./routes/messages");
const applicationRoutes = require("./routes/applications");
const tokenRoutes = require("./routes/token");
const scheduleRoutes = require("./routes/schedule");
const interviewRoutes = require("./routes/schedule");

app.use("/api/users", usersRoutes(db));
app.use("/api/jobs", jobRoutes(db));
app.use("/api/applications", applicationRoutes(db));
app.use("/api/fairs", fairsRoutes(db));
app.use("/api/organizations", organizationRoutes(db));
app.use("/api/messages", messagesRoutes(db));
app.use("/api/token", tokenRoutes());
app.use("/api/interviews", interviewRoutes(db));
app.use("/api/schedule", scheduleRoutes(db));

httpServer.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

