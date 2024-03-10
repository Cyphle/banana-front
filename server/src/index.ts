import fastify, { FastifyReply, FastifyRequest, HookHandlerDoneFunction } from 'fastify'
import { routes } from './api/account/account.controller';

const server = fastify({
  logger: true
});

server.decorateRequest('user', null);
server.addHook('preHandler', (req: FastifyRequest, reply: FastifyReply, done: HookHandlerDoneFunction) => {
  // @ts-ignore
  req.user = 'Bob Dylan'
  done()
})

server.register(routes, {
  prefix: '/foo'
});

export interface FastifyRequestWithUser extends FastifyRequest {
  user?: string;
}

server.get('/ping', async (request: FastifyRequestWithUser, reply: FastifyReply) => {
  return `pong user: ${request.user}`
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