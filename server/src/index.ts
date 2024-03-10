import fastify, { FastifyReply, FastifyRequest, HookHandlerDoneFunction } from 'fastify'
import { routes } from './api/account/account.controller';

const server = fastify({
  logger: true
});



server.decorateRequest('something', null);
server.addHook('preHandler', (req: FastifyRequest, reply: FastifyReply, done: HookHandlerDoneFunction) => {
  // @ts-ignore
  req.something = 'John doe'
  done()
})

server.register(routes, {
  prefix: '/foo'
});

server.get('/ping', async (request: FastifyRequest, reply: FastifyReply) => {
  // @ts-ignore
  return `pong user: ${request.user}, somehting: ${request.something}`
})

const start = async () => {
  try {
    await server.listen({ port: 3000 })
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}
start()