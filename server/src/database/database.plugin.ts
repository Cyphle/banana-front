import { Account } from '../plugins/account/account.types';
import { FastifyInstance, FastifyReply, HookHandlerDoneFunction } from 'fastify';
import { CustomFastifyRequest } from '../authentication';

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

const database = new Database();

export const decorateWithDatabase = (fastify: FastifyInstance): void => {
  fastify.decorateRequest('database', null);
  fastify.addHook('preHandler', (req: CustomFastifyRequest, reply: FastifyReply, done: HookHandlerDoneFunction) => {
    req.database = database
    done()
  });
}