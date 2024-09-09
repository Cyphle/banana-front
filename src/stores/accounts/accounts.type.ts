export interface AccountSummary {
  id: number;
  name: string;
  type: string;
  date: string;
  startingBalance: number;
  balance: number;
  projectedBalance: number;
}

// TODO il va manquer la modélisation des bugets
export interface Account {
  summary: AccountSummary;
  recurrentTransactions: RecurrentTransaction[];
  transactions: AccountTransaction[];
}

export type TransactionType = 'CHARGE' | 'CREDIT' | 'EXPENSE' | 'BUDGET';

export interface AccountTransaction {
  id: number;
  executedAt: string;
  appliedAt: string;
  type: TransactionType;
  description: string;
  amount: number;
}

export type FREQUENCY = 'MONTHLY';

export interface RecurrentTransaction {
  id: number;
  appliedAt: string;
  type: TransactionType;
  description: string;
  amount: number;
  startDate: string;
  endDate: string;
  frequency: FREQUENCY;
}