import { FastifyError, FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from 'fastify';
import { addAccount, getAccounts } from './account.controller';

export const accountPlugin = async (fastify: FastifyInstance, options: FastifyPluginOptions) => {
  fastify.log.info('Initiating account plugin');

  fastify.setErrorHandler((error: FastifyError, request: FastifyRequest, reply: FastifyReply) => {
    throw error
  })

  getAccounts(fastify);
  addAccount(fastify);
}