import { Account } from '../plugins/account/account.types';
import { mockAccounts } from './accounts';

interface DatabaseData {
  accounts: Account[]
}

export class Database {
  private data: DatabaseData = {
    accounts: mockAccounts
  }

  getAccounts(): Account[] {
    return this.data.accounts;
  }

  addAccount(account: Account) {
    this.data = {
      ...this.data,
      accounts: [
        ...this.data.accounts,
        account
      ]
    }
  }
}

export const database = new Database();