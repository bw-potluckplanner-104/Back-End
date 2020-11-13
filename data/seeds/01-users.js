const bcrypt = require("bcryptjs");
exports.seed = async function (knex) {
  return knex("users").insert([
    {
      username: "jonsnow",
      password: await bcrypt.hash("abc123", 15),
      email: "coldbastard@gmail.com",
    },
    {
      username: "johndoe",
      password: await bcrypt.hash("abc125", 15),
      email: "johndoe@gmail.com",
    },
    {
      username: "janedoe",
      password: await bcrypt.hash("def456", 15),
      email: "janedoe@gmail.com",
    },
    {
      username: "steverogers",
      password: await bcrypt.hash("ghi789", 15),
      email: "iamsteverogers@aol.com",
    },
    {
      username: "tonystark",
      password: await bcrypt.hash("abcd124", 15),
      email: "ironman@stark.com",
    },
  ]);
};
