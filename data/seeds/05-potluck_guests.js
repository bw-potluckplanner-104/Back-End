exports.seed = function (knex) {
  return knex("potluck_guests").insert([
    {
      guest: "janedoe",
      potluck_id: 1,
      item_id: 1,
    },
    {
      guest: "steverogers",
      potluck_id: 1,
      item_id: 8,
    },
    {
      guest: "tonystark",
      potluck_id: 1,
      item_id: 12,
    },
    {
      guest: "janedoe",
      potluck_id: 2,
      item_id: 9,
    },
    {
      guest: "jonsnow",
      potluck_id: 3,
      item_id: 1,
    },
    {
      guest: "janedoe",
      potluck_id: 4,
      item_id: 12,
    },
    {
      guest: "tonystark",
      potluck_id: 5,
      item_id: 7,
    },
    {
      guest: "johndoe",
      potluck_id: 4,
      item_id: 15,
    },
    {
      guest: "johndoe",
      potluck_id: 3,
      item_id: 6,
    },
    {
      guest: "tonystark",
      potluck_id: 3,
      item_id: 9,
    },
    {
      guest: "steverogers",
      potluck_id: 2,
      item_id: 3,
    },
    {
      guest: "jonsnow",
      potluck_id: 2,
      item_id: 13,
    },
    {
      guest: "steverogers",
      potluck_id: 5,
      item_id: 11,
    },
    {
      guest: "janedoe",
      potluck_id: 5,
      item_id: 5,
    },
  ]);
};
