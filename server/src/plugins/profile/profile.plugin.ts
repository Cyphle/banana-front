import { FastifyError, FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from 'fastify';
import { getMyProfile } from './profile.controller';

export const profilePlugin = async (fastify: FastifyInstance, options: FastifyPluginOptions) => {
  fastify.log.info('Initiating profile plugin');

  fastify.setErrorHandler((error: FastifyError, request: FastifyRequest, reply: FastifyReply) => {
    throw error
  })

  getMyProfile(fastify);
}