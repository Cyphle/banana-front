import { FastifyInstance, FastifyReply } from 'fastify';
import { CustomFastifyRequest } from '../../fastify.types';
import { Account, CreateAccountCommand } from './account.types';
import { Database } from '../../database/database';
import { getNumberParam, getStringBodyElement } from '../../helpers/fastify.helpers';
import { database } from '../../config/database.config';

// TODO ici il faudrait pouvoir lire les sessions et récupérer le profile connecté. Donc il faut un système de session
export const listAccountsController = (handler: (database: Database) => Account[]) => (fastify: FastifyInstance): void => {
  fastify.get('/', (request: CustomFastifyRequest, reply: FastifyReply) => {
    console.log('in get account controller', request.user);
    const accounts = handler(request.database!);

    reply
      .code(200)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send(accounts);
  })
}

export const getAccountByIdController = (handler: (database: Database) => (id: number) => Account) => (fastify: FastifyInstance): void => {
  fastify.get('/:id', (request: CustomFastifyRequest, reply: FastifyReply) => {
    const accountId = getNumberParam(request, 'id');
    const account = handler(database)(accountId);

    reply
      .code(200)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send(account);
  })
}

export const createAccountController = (handler: (database: Database) => (command: CreateAccountCommand) => Account) => (fastify: FastifyInstance) => {
  fastify.post('/', (request: CustomFastifyRequest, reply: FastifyReply) => {
    const command: CreateAccountCommand = {
      name: getStringBodyElement<string>(request, 'name')
    }
    const account = handler(database)(command);

    reply.code(200).send(account);
  });
}
