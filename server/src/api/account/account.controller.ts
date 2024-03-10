import { FastifyInstance, FastifyReply, FastifyRequest, HookHandlerDoneFunction } from 'fastify';

/**
 * Encapsulates the routes
 * @param {FastifyInstance} fastify  Encapsulated Fastify Instance
 * @param {Object} options plugin options, refer to https://fastify.dev/docs/latest/Reference/Plugins/#plugin-options
 */
export const  routes = async (fastify: FastifyInstance, options: any) => {

  fastify.decorateRequest('user', null);
  fastify.addHook('preHandler', (req: FastifyRequest, reply: FastifyReply, done: HookHandlerDoneFunction) => {
    // @ts-ignore
    req.user = 'Bob Dylan'
    done()
  })


  fastify.get('/world', async (request: FastifyRequest, reply: FastifyReply) => {
    // @ts-ignore
    return { hello: `world user: ${request.user}, something: ${request.something}` }
  })
}