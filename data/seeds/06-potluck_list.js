exports.seed = function (knex) {
  return knex("potluck_list").insert([
    {
      potluck_id: 1,
      item_id: 1,
      guest: "janedoe",
    },
    {
      potluck_id: 1,
      item_id: 8,
      guest: "jakelong",
    },
    {
      potluck_id: 1,
      item_id: 12,
      guest: "tonystark",
    },
    {
      potluck_id: 1,
      item_id: 11,
      guest: "tonystark",
    },
    {
      potluck_id: 1,
      item_id: 9,
      guest: "janedoe",
    },
    {
      potluck_id: 1,
      item_id: 15,
      guest: "jakelong",
    },
    {
      potluck_id: 2,
      item_id: 4,
      guest: "janedoe",
    },
    {
      potluck_id: 2,
      item_id: 3,
      guest: "jakelong",
    },
    {
      potluck_id: 2,
      item_id: 13,
      guest: "jonsnow",
    },
    {
      potluck_id: 2,
      item_id: 7,
      guest: "janedoe",
    },
    {
      potluck_id: 2,
      item_id: 9,
      guest: "jakelong",
    },
    {
      potluck_id: 3,
      item_id: 2,
      guest: "johndoe",
    },
    {
      potluck_id: 3,
      item_id: 5,
      guest: "johndoe",
    },
    {
      potluck_id: 3,
      item_id: 6,
      guest: "johndoe",
    },
    {
      potluck_id: 3,
      item_id: 9,
      guest: "tonystark",
    },
    {
      potluck_id: 3,
      item_id: 11,
      guest: "tonystark",
    },
    {
      potluck_id: 3,
      item_id: 13,
      guest: "jonsnow",
    },
    {
      potluck_id: 3,
      item_id: 1,
      guest: "jonsnow",
    },
    {
      potluck_id: 4,
      item_id: 12,
      guest: "janedoe",
    },
    {
      potluck_id: 4,
      item_id: 15,
      guest: "johndoe",
    },
    {
      potluck_id: 4,
      item_id: 10,
      guest: "janedoe",
    },
    {
      potluck_id: 5,
      item_id: 5,
      guest: "janedoe",
    },
    {
      potluck_id: 5,
      item_id: 1,
      guest: "janedoe",
    },
    {
      potluck_id: 5,
      item_id: 11,
      guest: "jakelong",
    },
    {
      potluck_id: 5,
      item_id: 7,
      guest: "tonystark",
    },
  ]);
};
