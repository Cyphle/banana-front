import { FastifyError, FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from 'fastify';
import { getProfileByIdController } from './profile.controller';
import { getProfileByIdHandler } from './profile.handlers';

export const profilePlugin = async (fastify: FastifyInstance, options: FastifyPluginOptions) => {
  fastify.log.info('Initiating profile plugin');

  fastify.setErrorHandler((error: FastifyError, request: FastifyRequest, reply: FastifyReply) => {
    throw error
  })

  getProfileByIdController(getProfileByIdHandler)(fastify);
}