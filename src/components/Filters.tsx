'use client';

import * as Select from '@radix-ui/react-select';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import styled from 'styled-components';
import { Transaction } from 'types/transaction';
import type { FiltersType } from 'types/filter';
import { Cross1Icon } from '@radix-ui/react-icons'; 

const ClearButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.primary || '#4f46e5'};
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  height: 35px;
  margin: 1.4rem 0 0 0;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary || '#4338ca'};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.3);
  }
`;

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const FilterBlock = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 150px;
`;

const Label = styled.label`
  margin-bottom: 4px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secondary};
`;

const Trigger = styled(Select.Trigger)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  background: #fff;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    border-color: #888;
  }

  &:focus {
    outline: none;
    border-color: #4f46e5;
    box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.3);
  }
`;

const Content = styled(Select.Content)`
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 999;
`;

const Viewport = styled(Select.Viewport)`
  padding: 0.5rem 0;
`;

const Item = styled(Select.Item)`
  padding: 0.5rem 1rem;
  font-size: 14px;
  cursor: pointer;
  color: #333;

  &:hover,
  &[data-highlighted] {
    background: #f0f0f0;
  }
`;

const Icon = styled(Select.Icon)`
  margin-left: 0.5rem;
`;

export const Filters = ({
  transactions,
  filters,
  onFilterChange,
  onClearFilters,
}: {
  transactions: Transaction[];
  filters: FiltersType;
  onFilterChange: (filter: Partial<FiltersType>) => void;
  onClearFilters: () => void;
}) => {
  const years = Array.from(new Set(transactions.map((t) => new Date(t.date).getFullYear())))
    .sort()
    .map((year) => ({ label: String(year), value: String(year) }));

  const accounts = Array.from(new Set(transactions.map((t) => t.account))).sort();
  const industries = Array.from(new Set(transactions.map((t) => t.industry))).sort();
  const states = Array.from(new Set(transactions.map((t) => t.state))).sort();

  const yearOptions = [{ label: 'Todos', value: 'all' }, ...years.map((year) => ({ label: year.label, value: year.value }))];
  const monthOptions = [
    { label: 'Todos', value: 'all' },
    { value: '01', label: 'Janeiro' },
    { value: '02', label: 'Fevereiro' },
    { value: '03', label: 'Março' },
    { value: '04', label: 'Abril' },
    { value: '05', label: 'Maio' },
    { value: '06', label: 'Junho' },
    { value: '07', label: 'Julho' },
    { value: '08', label: 'Agosto' },
    { value: '09', label: 'Setembro' },
    { value: '10', label: 'Outubro' },
    { value: '11', label: 'Novembro' },
    { value: '12', label: 'Dezembro' },
  ];

  const typeOptions = [
    { label: 'Todos', value: 'all' },
    { value: 'deposit', label: 'Receitas' },
    { value: 'withdraw', label: 'Despesas' },
  ];

  const accountOptions = [{ label: 'Todos', value: 'all' }, ...accounts.map((a) => ({ label: a, value: a }))];
  const industryOptions = [{ label: 'Todos', value: 'all' }, ...industries.map((i) => ({ label: i, value: i }))];
  const stateOptions = [{ label: 'Todos', value: 'all' }, ...states.map((s) => ({ label: s, value: s }))];

  return (
    <FilterContainer>
      <SelectDropdown label="Ano" options={yearOptions} value={filters.year} onChange={(val) => onFilterChange({ year: val })} />
      <SelectDropdown label="Mês" options={monthOptions} value={filters.month} onChange={(val) => onFilterChange({ month: val })} />
      <SelectDropdown label="Tipo" options={typeOptions} value={filters.type} onChange={(val) => onFilterChange({ type: val })} />
      <SelectDropdown label="Conta" options={accountOptions} value={filters.account} onChange={(val) => onFilterChange({ account: val })} />
      <SelectDropdown label="Indústria" options={industryOptions} value={filters.industry} onChange={(val) => onFilterChange({ industry: val })} />
      <SelectDropdown label="Estado" options={stateOptions} value={filters.state} onChange={(val) => onFilterChange({ state: val })} />
      
      <ClearButton onClick={onClearFilters} title='Limpar filtros'  aria-label="Limpar filtros">
        <Cross1Icon />
      </ClearButton>

    </FilterContainer>
  );
};

function SelectDropdown({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (val: string) => void;
}) {
  return (
    <FilterBlock>
      <Label>{label}</Label>
      <Select.Root value={value} onValueChange={onChange}>
        <Trigger>
          <Select.Value placeholder={`Selecione ${label.toLowerCase()}`} />
          <Icon>
            <ChevronDownIcon />
          </Icon>
        </Trigger>
        <Select.Portal>
          <Content>
            <Viewport>
              {options.map((option) => (
                <Item key={option.value} value={option.value}>
                  <Select.ItemText>{option.label}</Select.ItemText>
                </Item>
              ))}
            </Viewport>
          </Content>
        </Select.Portal>
      </Select.Root>
    </FilterBlock>
  );
}
