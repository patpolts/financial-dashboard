export interface FiltersType {
  year: string;
  month: string;
  type: 'all' | Transaction['transaction_type'];
  account: string;
  industry: string;
  state: string;
}