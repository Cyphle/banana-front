import { FastifyError, FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from 'fastify';
import { accounts } from './account.controller';

export const accountPlugin = async (fastify: FastifyInstance, options: FastifyPluginOptions) => {
  fastify.setErrorHandler((error: FastifyError, request: FastifyRequest, reply: FastifyReply) => {
    throw error
  })

  accounts(fastify);
}