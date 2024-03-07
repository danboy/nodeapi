/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function(knex) {
  return knex.schema
    .createTable('users', function (table) {
        table.increments('id');
        table.string('email', 255).notNullable();
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
