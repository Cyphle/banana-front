import { accountPlugin } from './plugins/account/account.plugin';
import { decorateWithUser } from './authentication';
import { initFastify } from './config/fastify';
import { decorateWithDatabase } from './database/database.plugin';

const fastify = initFastify(
  [decorateWithUser, decorateWithDatabase],
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