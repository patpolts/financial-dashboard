import { readFile } from 'fs/promises';
import path from 'path';
import {cache} from 'react';
import { Transaction } from 'types/transaction';

export const loadTransactions = cache(async (): Promise<Transaction[]> => {
  const filePath = path.join(process.cwd(), 'data', 'transactions.json');
  const json = await readFile(filePath, 'utf-8');
  return JSON.parse(json);
});