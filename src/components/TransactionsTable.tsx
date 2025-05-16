'use client';

import { useState, useMemo } from 'react';
import styled from 'styled-components';
import { Transaction } from 'types/transaction';

interface TransactionsTableProps {
  transactions: Transaction[];
  itemsPerPage: number;
}

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  thead {
    background-color: ${({ theme }) => theme.colors.card.background};
    color: ${({ theme }) => theme.colors.text};
  }

  th, td {
    padding: 0.75rem 1rem;
    border: 1px solid #ddd;
    text-align: left;
  }

  tbody tr:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.surface};
  }

  tbody tr:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;

  button {
    background-color: ${({ theme }) => theme.colors.secondary};
    border: none;
    color:  ${({ theme }) => theme.colors.buttonText};;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
    transition: background-color 0.2s ease;

    &:disabled {
      background-color: ${({ theme }) => theme.colors.primary};
      cursor: not-allowed;
    }

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export default function TransactionsTable({ transactions, itemsPerPage }: TransactionsTableProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(transactions.length / itemsPerPage);

  const currentTransactions = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return transactions.slice(start, start + itemsPerPage);
  }, [currentPage, itemsPerPage, transactions]);

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Tipo</th>
            <th>Conta</th>
            <th>Indústria</th>
            <th>Estado</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {currentTransactions.map((t, idx) => (
            <tr key={`${t.date}-${t.account}-${t.amount}-${idx}`}>
              <td>{new Date(t.date).toLocaleDateString()}</td>
              <td>{t.transaction_type}</td>
              <td>{t.account}</td>
              <td>{t.industry}</td>
              <td>{t.state}</td>
              <td>
                {(parseInt(t.amount) / 100).toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <PaginationContainer>
        <button onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} disabled={currentPage === 1}>
          Anterior
        </button>

        <span>
          Página {currentPage} de {totalPages}
        </span>

        <button onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages}>
          Próxima
        </button>
      </PaginationContainer>
    </div>
  );
}
