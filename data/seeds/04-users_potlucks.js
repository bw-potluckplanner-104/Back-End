exports.seed = function (knex) {
  return knex("users_potlucks").insert([
    {
      organizer_id: 1,
      organizer: "jonsnow",
      potluck_id: 1,
    },
    {
      organizer_id: 1,
      organizer: "jonsnow",
      potluck_id: 2,
    },
    {
      organizer_id: 2,
      organizer: "johndoe",
      potluck_id: 3,
    },
    {
      organizer_id: 2,
      organizer: "johndoe",
      potluck_id: 4,
    },
    {
      organizer_id: 1,
      organizer: "jonsnow",
      potluck_id: 5,
    },
  ]);
};
