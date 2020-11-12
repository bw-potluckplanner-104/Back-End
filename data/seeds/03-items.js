exports.seed = function (knex) {
  return knex("items").insert([
    {
      item: "Mashed potatoes",
    },
    {
      item: "Sandwhiches",
    },
    {
      item: "Rice",
    },
    {
      item: "Chicken Dip",
    },
    {
      item: "Cake",
    },
    {
      item: "Sliders",
    },
    {
      item: "Cheese Dip",
    },
    {
      item: "Meat kabobs",
    },
    {
      item: "Fruit kabobs",
    },
    {
      item: "Meatballs",
    },
    {
      item: "Spaghetti",
    },
    {
      item: "Potato chips",
    },
    {
      item: "Fruit salad",
    },
    {
      item: "Pizza",
    },
    {
      item: "Lasagna",
    },
  ]);
};
