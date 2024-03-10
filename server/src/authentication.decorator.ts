import { FastifyInstance, FastifyReply, HookHandlerDoneFunction } from 'fastify';
import { CustomFastifyRequest } from './fastify.types';

export const decorateWithUser = (fastify: FastifyInstance): void => {
  fastify.decorateRequest('user', null);
  fastify.addHook('preHandler', (req: CustomFastifyRequest, reply: FastifyReply, done: HookHandlerDoneFunction) => {
    req.user = 'Bob Dylan'
    done()
  });
}