const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const session = require("express-session");
const authRouter = require("./users/users-auth");
const usersRouter = require("./users/users-router");
const plRouter = require("./potlucks/potlucks-router");
const guestRouter = require("./users/guest-router");
const listRouter = require("./items/items-router");
const { restrict } = require("./middleware/router-middlware");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "keep it secret, keep it safe",
  })
);

server.use("/users", authRouter);
server.use("/users", restrict(), usersRouter);
server.use("/potlucks", restrict(), plRouter);
server.use("/potluck-guests", restrict(), guestRouter);
server.use("/potluck-items", restrict(), listRouter);

server.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello, world!",
  });
});

module.exports = server;
