import fastify, { FastifyInstance, FastifyPluginOptions } from 'fastify';
import cors from '@fastify/cors'
import fastifyCookie from '@fastify/cookie';
import fastifySession from '@fastify/session';

export const initFastify = (
  decorators: ((fastify: FastifyInstance) => void)[] = [],
  plugins: { plugin: (fastify: FastifyInstance, options: FastifyPluginOptions) => void, routesPrefix: string }[],
): FastifyInstance => {
  const server = fastify({
    logger: true
  });

  server.register(cors, {});
  server.register(fastifyCookie, {});
  server.register(fastifySession, { secret: 'superverylongsessionsecrettohashthingswhichhastobereplacedwheninproduction' });

  decorators.forEach(decorator => decorator(server));

  plugins.forEach(plugin => {
    server.register(
      plugin.plugin,
      {
        prefix: plugin.routesPrefix
      }
    );
  });

  return server;
}