import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

/**
 * Encapsulates the routes
 * @param {FastifyInstance} fastify  Encapsulated Fastify Instance
 * @param {Object} options plugin options, refer to https://fastify.dev/docs/latest/Reference/Plugins/#plugin-options
 */
export const  routes = async (fastify: FastifyInstance, options: any) => {
  fastify.get('/world', async (request: FastifyRequest, reply: FastifyReply) => {
    return { hello: 'world' }
  })
}