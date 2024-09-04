export interface AccountSummary {
  id: number;
  name: string;
  type: string;
  balance: number;
  projectedBalance: number;
}

export interface Account {
  summary: AccountSummary;
  transactions: AccountTransaction[];
}

export type TransactionType = 'CHARGE' | 'CREDIT' | 'EXPENSE' | 'BUDGET';

export interface AccountTransaction {
  executedAt: Date;
  appliedAt: Date;
  type: TransactionType;
  amount: number;
}