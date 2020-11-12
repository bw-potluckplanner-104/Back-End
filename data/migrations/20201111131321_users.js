exports.up = async function (knex) {
  await knex.schema.createTable("users", (tbl) => {
    tbl.increments("id");
    tbl.text("email").notNull().unique();
    tbl.text("username", 64).notNull().unique();
    tbl.text("password", 20).notNull();
  });
  await knex.schema.createTable("potlucks", (tbl) => {
    tbl.increments("id").primary().unsigned();
    tbl.date("date").notNull();
    tbl.time("time").notNull();
    tbl.text("location", 128).notNull();
  });
  await knex.schema.createTable("items", (tbl) => {
    tbl.increments("id");
    tbl.text("item", 50);
  });
  await knex.schema.createTable("users_potlucks", (tbl) => {
    tbl
      .integer("organizer_id")
      .references("id")
      .inTable("users")
      .unsigned()
      .notNull()
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    tbl
      .text("organizer")
      .references("username")
      .inTable("users")
      .notNull()
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    tbl
      .integer("potluck_id")
      .references("id")
      .inTable("potlucks")
      .unsigned()
      .notNull()
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    tbl.primary(["organizer_id", "potluck_id"]);
  });
  await knex.schema.createTable("potluck_guests", (tbl) => {
    tbl
      .integer("potluck_id")
      .references("id")
      .inTable("potlucks")
      .unsigned()
      .notNull()
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    tbl
      .text("guest")
      .references("username")
      .inTable("users")
      .notNull()
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
  await knex.schema.createTable("potluck_list", (tbl) => {
    tbl
      .integer("potluck_id")
      .references("id")
      .inTable("potlucks")
      .unsigned()
      .notNull()
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    tbl
      .integer("item_id")
      .references("id")
      .inTable("items")
      .unsigned()
      .notNull()
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    tbl
      .text("guest")
      .references("guest")
      .inTable("potluck_guests")
      .notNull()
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    tbl.bool("claimed").defaultTo(true);
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("potluck_list");
  await knex.schema.dropTableIfExists("potluck_guests");
  await knex.schema.dropTableIfExists("users_potlucks");
  await knex.schema.dropTableIfExists("items");
  await knex.schema.dropTableIfExists("potlucks");
  await knex.schema.dropTableIfExists("users");
};
