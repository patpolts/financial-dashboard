import { loadTransactions } from '@libs/loadTransactions';
import TransactionsTable from '@components/TransactionsTable';
import Sidebar from '@components/Sidebar';

const ITEMS_PER_PAGE = 50;

export default async function Home() {
  const transactions = await loadTransactions();

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '2rem' }}>
        <h2>Transações</h2>
        <TransactionsTable transactions={transactions} itemsPerPage={ITEMS_PER_PAGE} />
      </div>
    </div>
  );
}
