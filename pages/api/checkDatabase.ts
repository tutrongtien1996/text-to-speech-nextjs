// pages/api/checkDatabase.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { checkDatabaseConnection } from '@/lib/dbHelper';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await checkDatabaseConnection()
}
