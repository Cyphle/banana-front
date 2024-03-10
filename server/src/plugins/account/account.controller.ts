import { FastifyInstance, FastifyReply } from 'fastify';
import { FastifyRequestWithUser } from '../../authentication';

export const accounts = (fastify: FastifyInstance): void => {
  fastify.get('/', async (request: FastifyRequestWithUser, reply: FastifyReply) => {
    return { hello: `Accounts of ${request.user}` }
  })
}