/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function(knex) {
  return knex.schema.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .createTable('users', function (table) {
        table.uuid("id", {primaryKey: true}).defaultTo(knex.raw("uuid_generate_v4()"));
        table.string('email', 255).unique().notNullable();
        table.string('first_name', 255);
        table.string('last_name', 255);
        table.string('password', 255).notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function(knex) {
 return knex.schema
      .dropTable("users"); 
};
