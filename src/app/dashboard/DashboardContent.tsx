'use client';
import { useState, useMemo } from 'react';
import { Filters } from '@components/Filters';
import { styled } from 'styled-components';
import Sidebar from '@components/Sidebar';
import { Card } from './card';
import { Transaction } from 'types/transaction';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts';
import {
  FiTrendingUp,
  FiTrendingDown,
  FiLayers,
  FiBriefcase,
  FiDollarSign,
  FiPieChart,
} from 'react-icons/fi';
import { format } from 'date-fns';
import { FiltersType } from 'types/filter';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#a4de6c', '#d0ed57', '#8dd1e1'];

const GridLayoutCharts = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

const CardsContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const ChartContainer = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 2rem;
`;

const Section = styled.section`
  margin-top: 2rem;
`;

const ChartBox = styled.div`
  height: 400px;
  background: white;
  padding: 1rem;
  border-radius: 0.75rem;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);

  & > h4 {
    margin: 0px 1rem 0px 0px;
    text-align: left;
  }
`;

function formatCurrency(value: number) {
  return (value / 100).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

export default function DashboardContent({ transactions }: { transactions: Transaction[] }) {
  const [filters, setFilters] = useState<FiltersType>({
    year: 'all',
    month: 'all',
    type: 'all',
    account: 'all',
    industry: 'all',
    state: 'all',
  });

  const clearFilters = () => {
    setFilters({
      year: 'all',
      month: 'all',
      type: 'all',
      account: 'all',
      industry: 'all',
      state: 'all',
    });
  };

  const filteredTransactions = useMemo(() => {
    return transactions.filter((t) => {
      const d = new Date(t.date);
      const matchesYear = filters.year !== 'all' ? d.getFullYear().toString() === filters.year : true;
      const matchesMonth = filters.month !== 'all' ? String(d.getMonth() + 1).padStart(2, '0') === filters.month : true;
      const matchesType = filters.type !== 'all' ? t.transaction_type === filters.type : true;
      const matchesAccount = filters.account !== 'all' ? t.account === filters.account : true;
      const matchesIndustry = filters.industry !== 'all' ? t.industry === filters.industry : true;
      const matchesState = filters.state !== 'all' ? t.state === filters.state : true;

      return (
        matchesYear &&
        matchesMonth &&
        matchesType &&
        matchesAccount &&
        matchesIndustry &&
        matchesState
      );
    });
  }, [filters, transactions]);


  const now = Date.now();
  const deposits = filteredTransactions.filter((x) => x.transaction_type === 'deposit');
  const withdraws = filteredTransactions.filter((x) => x.transaction_type === 'withdraw');

  const depositSum = deposits.reduce((sum, x) => sum + parseInt(x.amount), 0);
  const withdrawSum = withdraws.reduce((sum, x) => sum + parseInt(x.amount), 0);

  const balance = depositSum - withdrawSum;
  const pendingTransactions = filteredTransactions.filter(t => new Date(t.date).getTime() > now);
  const pendingCount = pendingTransactions.length;
  const totalTransactions = filteredTransactions.length;
  const industries = Array.from(new Set(filteredTransactions.map((x) => x.industry)));

  const industryTotals = filteredTransactions.reduce((ind, x) => {
    ind[x.industry] = (ind[x.industry] || 0) + parseInt(x.amount);
    return ind;
  }, {} as Record<string, number>);

  const chartData = Object.entries(industryTotals).map(([industry, total]) => ({
    industry,
    total: parseFloat((total / 100).toFixed(2)),
  }));

  const monthlyMap = new Map<string, { deposits: number; withdraws: number }>();

  filteredTransactions.forEach((t) => {
    const date = new Date(t.date);
    const month = format(date, 'yyyy-MM');
    const current = monthlyMap.get(month) || { deposits: 0, withdraws: 0 };

    if (t.transaction_type === 'deposit') {
      current.deposits += parseInt(t.amount);
    } else {
      current.withdraws += parseInt(t.amount);
    }

    monthlyMap.set(month, current);
  });

  const monthlyData = Array.from(monthlyMap.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, { deposits, withdraws }], index, arr) => {
      const prev = arr[index - 1]?.[1];
      const prevBalance = prev ? prev.deposits - prev.withdraws : 0;
      const currentBalance = deposits - withdraws + prevBalance;

      return {
        month,
        deposits: deposits / 100,
        withdraws: withdraws / 100,
        balance: currentBalance / 100,
      };
    });

  const stateTotals = filteredTransactions.reduce((account, t) => {
    account[t.state] = (account[t.state] || 0) + parseInt(t.amount);
    return account;
  }, {} as Record<string, number>);

  const chartState = Object.entries(stateTotals).map(([state, total]) => ({
    name: state,
    value: total / 100,
  }));



  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '2rem' }}>
        <h2>Dashboard</h2>

        <Filters
          transactions={transactions}
          filters={filters}
          onFilterChange={(updated) => setFilters((prev) => ({ ...prev, ...updated }))} 
          onClearFilters={clearFilters} />

        <h3>Resumo de transações</h3>
        <GridLayout>
          <Card title="Total de Transações" value={totalTransactions.toString()} icon={<FiLayers />} />
          <Card title="Indústrias" value={industries.length.toString()} icon={<FiBriefcase />} />
          <Card title="Receitas" value={formatCurrency(depositSum)} icon={<FiTrendingUp />} />
          <Card title="Despesas" value={formatCurrency(withdrawSum)} icon={<FiTrendingDown />} />
          <Card title="Saldo" value={formatCurrency(balance)} icon={<FiDollarSign />} />
          <Card title="Pendentes" value={pendingCount.toString()} icon={<FiLayers />} />
        </GridLayout>

        <Section>
          <h3>Gráficos de transações</h3>
          <GridLayoutCharts>
            <ChartBox>
              <h4>Por Indústria</h4>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="industry" />
                  <YAxis />
                  <Tooltip formatter={(value: any) => formatCurrency(value * 100)} />
                  <Bar dataKey="total" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </ChartBox>

            <ChartBox>
              <h4>Evolução do saldo</h4>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value: any) => formatCurrency(value * 100)} />
                  <Line type="monotone" dataKey="balance" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            </ChartBox>

            <ChartBox>
              <h4>Por estado</h4>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartState}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                  >
                    {chartState.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value: any) => formatCurrency(value * 100)} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </ChartBox>

            <ChartBox>
              <h4>Receitas vs Despesas</h4>
              <ResponsiveContainer width="100%" height="90%">
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value: any) => formatCurrency(value * 100)} />
                  <Legend />
                  <Bar dataKey="deposits" fill="#4caf50" name="Receitas" />
                  <Bar dataKey="withdraws" fill="#f44336" name="Despesas" />
                </BarChart>
              </ResponsiveContainer>
            </ChartBox>
          </GridLayoutCharts>
        </Section>

      </div>
    </div>
  );
}
