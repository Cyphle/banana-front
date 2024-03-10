import { FastifyInstance, FastifyReply } from 'fastify';
import { FastifyRequestWithUser } from '../../index';

export const  routes = async (fastify: FastifyInstance, options: any) => {
  fastify.get('/world', async (request: FastifyRequestWithUser, reply: FastifyReply) => {
    return { hello: `world user: ${request.user}` }
  })
}