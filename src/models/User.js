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
    await this.doHashPassword();
  }

  async doHashPassword() {
    await bcrypt.hash(this.password, 10, (err, hash) => {
      this.password = hash;
    });
  }
}

export default User;
