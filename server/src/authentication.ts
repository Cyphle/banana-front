import { FastifyInstance, FastifyReply, FastifyRequest, HookHandlerDoneFunction } from 'fastify';
import { Database } from './database/database.plugin';

export interface CustomFastifyRequest extends FastifyRequest {
  user?: string;
  database?: Database;
}

export const decorateWithUser = (fastify: FastifyInstance): void => {
  fastify.decorateRequest('user', null);
  fastify.addHook('preHandler', (req: CustomFastifyRequest, reply: FastifyReply, done: HookHandlerDoneFunction) => {
    req.user = 'Bob Dylan'
    done()
  });
}