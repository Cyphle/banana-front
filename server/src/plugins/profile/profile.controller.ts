import { FastifyInstance, FastifyReply } from 'fastify';
import { Database } from '../../database/database';
import { CustomFastifyRequest } from '../../fastify.types';
import { getStringBodyElement } from '../../helpers/fastify.helpers';
import { CreateProfileRequest, Profile } from './profile.types';

export const getProfileByUsernameController = (handler: (database: Database) => (username: string) => Profile) => (fastify: FastifyInstance): void => {
  fastify.get('/', (request: CustomFastifyRequest, reply: FastifyReply) => {
    const connectedProfile = request.session.get('user');
    const profile = handler(request.database!!)(connectedProfile.username);
    reply
      .code(200)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send({ profile });
  });
}

export const createProfileController = (handler: (database: Database) => (command: CreateProfileRequest) => Profile) => (fastify: FastifyInstance): void => {
  fastify.post('/', (request: CustomFastifyRequest, reply: FastifyReply) => {
    const command = {
      username: getStringBodyElement<string>(request, 'username'),
      email: getStringBodyElement<string>(request, 'email'),
      firstName: getStringBodyElement<string>(request, 'firstName'),
      lastName: getStringBodyElement<string>(request, 'lastName')
    }

    const profile = handler(request.database!!)(command);
    reply
      .code(201)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send({ profile });
  })
}
