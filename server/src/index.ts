import { FastifyReply } from 'fastify'
import { accountPlugin } from './plugins/account/account.plugin';
import { decoreWithUser, FastifyRequestWithUser } from './authentication';
import { initFastify } from './config/fastify';

const fastify = initFastify();

decoreWithUser(fastify);

fastify.register(
  accountPlugin,
  {
    prefix: '/accounts'
  }
);

// Some example
fastify.get('/ping', async (request: FastifyRequestWithUser, reply: FastifyReply) => {
  return `pong user: ${ request.user }`
})

const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start();