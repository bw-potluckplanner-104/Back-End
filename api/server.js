const express = require("express");
const usersRouter = require("./users/users-router.js");
const plRouter = require("./potlucks/potlucks-router");
const listRouter = require("./items/items-router");

const server = express();

server.use(express.json());

server.use("/users", usersRouter);
server.use("/potlucks", plRouter);
server.use("/potluck-items", listRouter);

server.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello, world!",
  });
});

module.exports = server;
