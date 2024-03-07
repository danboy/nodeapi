import Knex from 'knex';

// Initialize knex.
export const knex = Knex({
  client: process.env.DB_DIALECT,
  useNullAsDefault: true,
  connection: {
    host : process.env.DB_HOST,
    port : process.env.DB_PORT,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE
  }
});
