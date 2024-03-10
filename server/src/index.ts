import fastify, {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyReply,
  FastifyRequest,
  HookHandlerDoneFunction
} from 'fastify'
import { accountPlugin } from './plugins/account/account.plugin';

const server = fastify({
  logger: true
});



export interface FastifyRequestWithUser extends FastifyRequest {
  user?: string;
}
server.decorateRequest('user', null);
server.addHook('preHandler', (req: FastifyRequestWithUser, reply: FastifyReply, done: HookHandlerDoneFunction) => {
  req.user = 'Bob Dylan'
  done()
})

server.register(accountPlugin, {
  prefix: '/foo'
});

server.get('/ping', async (request: FastifyRequestWithUser, reply: FastifyReply) => {
  return `pong user: ${ request.user }`
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