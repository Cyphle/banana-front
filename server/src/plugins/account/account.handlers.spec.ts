import { mockDatabase } from '../../testing/mock-database';
import { createAccountHandler, getAccountByIdHandler, getAccountsHandler } from './account.handlers';

describe('Account handlers', () => {
  it('should get all account from database', () => {
    const accounts = getAccountsHandler(mockDatabase);

    expect(accounts).toContainEqual({ id: 1, name: 'Commun CIC' });
  });

  it('should get one account from database for given id', () => {
    const accounts = getAccountByIdHandler(mockDatabase)(1);

    expect(accounts).toEqual({ id: 1, name: 'Commun CIC' });
  });

  it('should create an account', () => {
    const account = createAccountHandler(mockDatabase)({ 
      name: 'Another account',
      type: 'PERSONAL',
      startingBalance: 1000,
      currentBalance: 1000,
      projectedBalance: 1000
    });

    expect(account).toEqual({ id: 2, name: 'Another account'});
  });
})