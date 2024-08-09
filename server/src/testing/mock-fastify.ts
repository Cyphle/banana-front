import fastify, { FastifyInstance, FastifyReply, HookHandlerDoneFunction } from 'fastify';
import { CustomFastifyRequest } from '../fastify.types';
import { database } from '../config/database.config';

export const mockFastify = (opts = {}, controllers: ((fastify: FastifyInstance) => void)[]) => {
  const app: FastifyInstance = fastify(opts)

  app.addHook('preHandler', (req: CustomFastifyRequest, reply: FastifyReply, done: HookHandlerDoneFunction) => {
    req.database = database
    done()
  });

  controllers.forEach(controller => controller(app));

  return app
}