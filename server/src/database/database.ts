import { Account } from '../plugins/account/account.types';
import { Profile } from '../plugins/profile/profile.types';
import * as fs from 'fs';
import path from 'path';

interface DatabaseData {
  [table: string]: any[];
}

export class Database {
  private data: DatabaseData = {}
  private FOLDER_CONFIG = {
    basePath: '',
    dataPath: 'data'
  }

  constructor() {
    this.hydrate();
  }

  private hydrate() {
    fs.readdirSync(path.join(this.FOLDER_CONFIG.basePath, this.FOLDER_CONFIG.dataPath))
      .forEach((file: string) => {
        const data = JSON.parse(fs.readFileSync(path.join(this.FOLDER_CONFIG.basePath, this.FOLDER_CONFIG.dataPath, file), 'utf8'));
        this.data[file.split('.')[0]] = data;
      });
  }

  dump(): DatabaseData {
    return this.data;
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
    // return this.data.profile
    return {
      'id': 1,
      'username': 'john.doe',
      'firstName': 'John',
      'lastName': 'Doe',
      'email': 'john.doe@banana.fr'
    };
  }
}

export const database = new Database();