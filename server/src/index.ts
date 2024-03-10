import fastify, { FastifyReply, FastifyRequest } from 'fastify'
import { routes } from './api/account/account.controller';

const server = fastify({
  logger: true
});

server.register(routes);

server.get('/ping', async (request: FastifyRequest, reply: FastifyReply) => {
  return 'pong\n'
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