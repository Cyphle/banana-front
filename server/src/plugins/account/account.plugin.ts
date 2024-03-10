import { FastifyError, FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from 'fastify';
import { FastifyRequestWithUser } from '../../index';

export const accountPlugin = async (fastify: FastifyInstance, options: FastifyPluginOptions) => {
  fastify.setErrorHandler((error: FastifyError, request: FastifyRequest, reply: FastifyReply) => {
    throw error
  })

  fastify.get('/world', async (request: FastifyRequestWithUser, reply: FastifyReply) => {
    return { hello: `world user: ${request.user}` }
  })
}