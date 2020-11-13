const express = require("express");
const authRouter = require("./auth/auth-router");
const usersRouter = require("./users/users-router");
const plRouter = require("./potlucks/potlucks-router");
const listRouter = require("./items/items-router");

const server = express();

server.use(express.json());

server.use("/", authRouter);
server.use("/users", usersRouter);
server.use("/potlucks", plRouter);
server.use("/potluck-item", listRouter);

server.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello, world!",
  });
});

module.exports = server;
