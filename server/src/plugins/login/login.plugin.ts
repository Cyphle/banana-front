import { FastifyInstance, FastifyPluginOptions } from 'fastify';

export const loginPlugin = async (fastify: FastifyInstance, _: FastifyPluginOptions) => {
  fastify.log.info('Initiating fake login plugin');


}