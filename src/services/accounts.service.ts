import { getMany, getOne } from '../helpers/http.ts';
import {
  Account,
  AccountSummary,
  AccountTransaction, FREQUENCY,
  RecurrentTransaction,
  TransactionType
} from '../stores/accounts/accounts.type.ts';

// TODO to be tested
export const getAccounts = (): Promise<AccountSummary[]> => {
  return getMany(`accounts`, responseToAccounts);
}

export const responseToAccounts = (data: any): AccountSummary[] => {
  return data.map((account: any) => {
    return {
      id: account.id,
      name: account.name,
      type: account.type,
      balance: account.balance,
      projectedBalance: account.projectedBalance,
    };
  });
}

export const getAccount = (id: number): Promise<Account> => {
  return getOne(`accounts/${ id }`, responseToAccount);
}

export const responseToAccount = (data: any): Account => {
    return {
      summary: {
        id: data.id,
        name: data.name,
        type: data.type,
        date: data.date,
        startingBalance: data.startingBalance,
        balance: data.balance,
        projectedBalance: data.projectedBalance,
      },
      recurrentTransactions: data.recurrentTransactions.map((transaction: any): RecurrentTransaction => ({
        id: transaction.id,
        appliedAt: transaction.appliedAt,
        type: transaction.type,
        description: transaction.description,
        amount: transaction.amount,
        startDate: transaction.startDate,
        endDate: transaction.endDate,
        frequency: transaction.frequency as FREQUENCY,
      })),
      transactions: data.transactions.map((transaction: any): AccountTransaction => ({
        id: transaction.id,
        executedAt: transaction.executedAt,
        appliedAt: transaction.appliedAt,
        type: transaction.type as TransactionType,
        description: transaction.description,
        amount: transaction.amount,
      })),
    };
}