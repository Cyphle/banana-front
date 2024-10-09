import { FastifyError, FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from 'fastify';
import { createProfileController, getProfileByUsernameController } from './profile.controller';
import { createProfileHandler, getProfileByUsernameHandler } from './profile.handlers';

export const profilePlugin = async (fastify: FastifyInstance, options: FastifyPluginOptions) => {
  fastify.log.info('Initiating profile plugin');

  fastify.setErrorHandler((error: FastifyError, request: FastifyRequest, reply: FastifyReply) => {
    throw error
  })

  getProfileByUsernameController(getProfileByUsernameHandler)(fastify);
  createProfileController(createProfileHandler)(fastify);
}