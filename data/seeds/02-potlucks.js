exports.seed = function (knex) {
  return knex("potlucks").insert([
    {
      date: Date.now(),
      time: "5:00 pm",
      location: "My House",
      organizer: "jonsnow",
    },
    {
      date: Date.now(),
      time: "4:00 pm",
      location: "Church",
      organizer: "jonsnow",
    },
    {
      date: Date.now(),
      time: "7:30 pm",
      location: "The nearest park",
      organizer: "johndoe",
    },
    {
      date: Date.now(),
      time: "12:00 pm",
      location: "Someone's House",
      organizer: "johndoe",
    },
    {
      date: Date.now(),
      time: "3:00 pm",
      location: "Robert's House",
      organizer: "jonsnow",
    },
  ]);
};
