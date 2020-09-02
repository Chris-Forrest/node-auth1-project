const { table } = require("../dbConfig");

exports.up = function(knex) {
  return knex.schema.createTable("users", (tbl) => {
      tbl.increments()
      tbl.text("usernam").notNull().unique()
      tbl.text("password").notNull()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users")
};
