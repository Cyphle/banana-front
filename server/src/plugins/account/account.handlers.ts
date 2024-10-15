import { Database } from '../../database/database';
import { Account, CreateAccountRequest } from './account.types';

export const getAccountsHandler = (database: Database): Account[] => {
  return database.read('accounts');
}

export const getAccountByIdHandler = (database: Database) => (id: number): Account => {
  return database.readOneById('accounts', id);
}

export const createAccountHandler = (database: Database) => (request: CreateAccountRequest): Account => {
  const accounts = database.read<Account>('accounts')
    .sort((a: Account, b: Account) => a.summary.id - b.summary.id)
    .reverse();

  const account: Account = {
    summary: {
      id: (accounts[0]?.summary.id ?? 0) + 1,
      name: request.name,
      type: request.type,
      startingBalance: request.startingBalance,
      currentBalance: request.currentBalance,
      projectedBalance: request.projectedBalance,
    },
    budgets: [],
    transactions: [],
  }
  return database.create<Account>('accounts', account);
}