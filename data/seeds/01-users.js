exports.seed = function (knex) {
  return knex("users").insert([
    {
      username: "jonsnow",
      password: "abc123",
      email: "coldbastard@gmail.com",
    },
    {
      username: "johndoe",
      password: "abc125",
      email: "johndoe@gmail.com",
    },
    {
      username: "janedoe",
      password: "def456",
      email: "janedoe@gmail.com",
    },
    {
      username: "jakelong",
      password: "ghi789",
      email: "americandragon@aol.com",
    },
    {
      username: "tonystark",
      password: "abcd124",
      email: "ironman@stark.com",
    },
  ]);
};
