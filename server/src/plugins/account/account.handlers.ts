import { Database } from '../../database/database';
import { Account, CreateAccountCommand } from './account.types';

export const getAccountsHandler = (database: Database): Account[] => {
  return database.read('accounts');
}

export const getAccountByIdHandler = (database: Database) => (id: number): Account => {
  return database.readOneById('accounts', id);
}

export const createAccountHandler = (database: Database) => (createAccountCommand: CreateAccountCommand): Account => {
  // Some domain logic...
  const account: Account = {
    id: 0,
    name: createAccountCommand.name
  }
  return database.create<Account>('accounts', account);
}