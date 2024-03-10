import { FastifyInstance, FastifyReply } from 'fastify';
import { CustomFastifyRequest } from '../../fastify.types';

export const accounts = (fastify: FastifyInstance): void => {
  fastify.get('/', (request: CustomFastifyRequest, reply: FastifyReply) => {
    fastify.log.info('COUCOU MERDE');
    fastify.log.info(request);
    fastify.log.info(request.database?.getAccounts());

    reply
      .code(200)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send({ hello: `Accounts of ${request.user} are ${JSON.stringify(request.database?.getAccounts())}` });
  })

  fastify.get('/add', (request: CustomFastifyRequest, reply: FastifyReply) => {
    request.database?.addAccount({
      id: 2,
      name: 'Another account'
    })

    reply.code(200).send('OK');
  });
}