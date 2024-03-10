import { Account } from '../plugins/account/account.types';

interface DatabaseData {
  accounts: Account[]
}

export class Database {
  private data: DatabaseData = {
    accounts: [{
      id: 1,
      name: 'Commun CIC'
    }]
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