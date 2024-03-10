import { accountPlugin } from './plugins/account/account.plugin';
import { decoreWithUser } from './authentication';
import { initFastify } from './config/fastify';

const fastify = initFastify(
  [decoreWithUser],
  [{ plugin: accountPlugin, routesPrefix: '/accounts' }]
);

const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start();