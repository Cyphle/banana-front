import { FastifyInstance, FastifyReply } from 'fastify';
import { CustomFastifyRequest } from '../../fastify.types';
import { Account } from './account.types';
import { Database } from '../../database/database';
import { data } from 'autoprefixer';

export const getAccounts = (fastify: FastifyInstance): void => {
  fastify.get('/', (request: CustomFastifyRequest, reply: FastifyReply) => {
    fastify.log.info('COUCOU MERDE');
    fastify.log.info(request);
    fastify.log.info(request.database?.read('accounts'));

    const accounts = getAccountsHandler(request.database!);

    reply
      .code(200)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send(accounts);
  })
}

export const getAccountsHandler = (database: Database): Account[] => {
  // return database.getAccounts();
  return database.read('accounts');
}

export const addAccount = (fastify: FastifyInstance) => {
  fastify.get('/add', (request: CustomFastifyRequest, reply: FastifyReply) => {
    // request.database?.addAccount({
    //   id: 2,
    //   name: 'Another account'
    // })

    reply.code(200).send('OK');
  });
}