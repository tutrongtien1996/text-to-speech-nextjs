// lib/dbHelper.ts
import {db}  from './db';

export async function checkDatabaseConnection() {
  try {
    const response = await db.select('id').from('voices');
    console.log(response)
    console.log('Database connection successful');
  } catch (error) {
    console.error('Failed to connect to database');
    console.error(error);
  }
}
