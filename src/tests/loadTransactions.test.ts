import { loadTransactions } from '../lib/loadTransactions';
import fs from 'fs/promises';
import path from 'path';

jest.mock('fs/promises');

describe('loadTransactions', () => {
  it('should load and parse the transactions JSON file correctly', async () => {
    const mockJson = JSON.stringify([
      {
        date: 1684272000000,
        amount: "10000",
        transaction_type: "deposit",
        currency: "BRL",
        account: "Conta A",
        industry: "Tech",
        state: "SP"
      },
      {
        date: 1684358400000,
        amount: "5000",
        transaction_type: "withdraw",
        currency: "BRL",
        account: "Conta B",
        industry: "Finance",
        state: "RJ"
      }
    ]);

    (fs.readFile as jest.Mock).mockResolvedValue(mockJson);

    const transactions = await loadTransactions();

    expect(transactions).toBeInstanceOf(Array);
    expect(transactions.length).toBe(2);

    expect(transactions[0]).toMatchObject({
      transaction_type: 'deposit',
      amount: '10000',
      account: 'Conta A',
      industry: 'Tech',
      state: 'SP',
    });

    expect(transactions[1]).toMatchObject({
      transaction_type: 'withdraw',
      amount: '5000',
      account: 'Conta B',
      industry: 'Finance',
      state: 'RJ',
    });
  });
});
