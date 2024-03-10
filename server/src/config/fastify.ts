import fastify, { FastifyInstance, FastifyPluginOptions } from 'fastify';

export const initFastify = (
  decorators: ((fastify: FastifyInstance) => void)[] = [],
  plugins: { plugin: (fastify: FastifyInstance, options: FastifyPluginOptions) => void, routesPrefix: string }[],
): FastifyInstance => {
  const server = fastify({
    logger: true
  });

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