import { Account } from '../plugins/account/account.types';
import { mockAccounts } from './data/accounts';
import { Profile } from '../plugins/profile/profile.types';
import { mockProfile } from './data/profile';

interface DatabaseData {
  profile: Profile;
  accounts: Account[];
}

export class Database {
  private data: DatabaseData = {
    accounts: mockAccounts,
    profile: mockProfile
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

  getMyProfile(): Profile {
    return this.data.profile
  }
}

export const database = new Database();