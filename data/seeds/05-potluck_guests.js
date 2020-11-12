exports.seed = function (knex) {
  return knex("potluck_guests").insert([
    {
      guest: "janedoe",
      potluck_id: 1,
    },
    {
      guest: "jakelong",
      potluck_id: 1,
    },
    {
      guest: "tonystark",
      potluck_id: 1,
    },
    {
      guest: "janedoe",
      potluck_id: 2,
    },
    {
      guest: "jonsnow",
      potluck_id: 3,
    },
    {
      guest: "janedoe",
      potluck_id: 4,
    },
    {
      guest: "tonystark",
      potluck_id: 5,
    },
    {
      guest: "johndoe",
      potluck_id: 4,
    },
    {
      guest: "johndoe",
      potluck_id: 3,
    },
    {
      guest: "tonystark",
      potluck_id: 3,
    },
    {
      guest: "jakelong",
      potluck_id: 2,
    },
    {
      guest: "jonsnow",
      potluck_id: 2,
    },
    {
      guest: "jakelong",
      potluck_id: 5,
    },
    {
      guest: "janedoe",
      potluck_id: 5,
    },
  ]);
};
