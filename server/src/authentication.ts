import { FastifyInstance, FastifyReply, FastifyRequest, HookHandlerDoneFunction } from 'fastify';

export interface FastifyRequestWithUser extends FastifyRequest {
  user?: string;
}

export const decoreWithUser = (fastify: FastifyInstance): void => {
  fastify.decorateRequest('user', null);
  fastify.addHook('preHandler', (req: FastifyRequestWithUser, reply: FastifyReply, done: HookHandlerDoneFunction) => {
    req.user = 'Bob Dylan'
    done()
  })
}