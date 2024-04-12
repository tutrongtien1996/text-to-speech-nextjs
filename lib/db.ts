import dotenv from 'dotenv';
import knex from 'knex';

dotenv.config();

const db = knex({
  client: 'mysql2',
  connection: {
    host: process.env.MY_HOST,
    port: Number(process.env.MY_PORT),
    user: process.env.MY_USER,
    password: process.env.MY_PASSWORD,
    database: process.env.MY_DATABASE
  }
});

export { db };
