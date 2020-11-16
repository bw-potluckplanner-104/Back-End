exports.up = async function (knex) {
  await knex.schema.createTable("users", (tbl) => {
    tbl.increments("id");
    tbl.text("email").notNull().unique();
    tbl.string("username", 64).notNull().unique();
    tbl.string("password", 20).notNull();
  });
  await knex.schema.createTable("potlucks", (tbl) => {
    tbl.increments("id").primary().unsigned();
    tbl.date("date").notNull();
    tbl.string("time", 10).notNull();
    tbl.string("location", 128).notNull();
    tbl.text("organizer").notNull().references("username").inTable("users");
  });
  await knex.schema.createTable("items", (tbl) => {
    tbl.increments("id");
    tbl.string("item", 50).notNull();
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
      .integer("item_id")
      .references("id")
      .inTable("items")
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
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("potluck_guests");
  await knex.schema.dropTableIfExists("items");
  await knex.schema.dropTableIfExists("potlucks");
  await knex.schema.dropTableIfExists("users");
};
