import 'dotenv/config';
// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

export default {
  development: {
    client: process.env.DB_DIALECT,
    useNullAsDefault: true,
    connection: {
      host : process.env.DB_HOST,
      port : process.env.DB_PORT,
      user : process.env.DB_USER,
      password : process.env.DB_PASSWORD,
      database : process.env.DB_DATABASE
    },
    migrations: {
      directory: './src/db/migrations',
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: process.env.DB_DIALECT,
    useNullAsDefault: true,
    connection: {
      host : process.env.DB_HOST,
      port : process.env.DB_PORT,
      user : process.env.DB_USER,
      password : process.env.DB_PASSWORD,
      database : process.env.DB_DATABASE
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: process.env.DB_DIALECT,
    useNullAsDefault: true,
    connection: {
      host : process.env.DB_HOST,
      port : process.env.DB_PORT,
      user : process.env.DB_USER,
      password : process.env.DB_PASSWORD,
      database : process.env.DB_DATABASE
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './src/db/migrations',
      tableName: 'knex_migrations'
    }
  }

};
