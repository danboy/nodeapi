import { Model } from 'objection';
import { knex } from '../db/config.js';
Model.knex(knex);

import bcrypt from "bcrypt";

export class User extends Model {
  static get tableName() {
    return 'users';
  }

  async $beforeInsert(context) {
    await super.$beforeInsert(context);
    this.password = await this.doHashPassword();

  }

  async doHashPassword() {
    const pass = await new Promise((resolve, reject) => {
      bcrypt.hash(this.password, 10, (err, hash) => {
        resolve(hash);
      });
    });
    return pass;
  }
}

export default User;
