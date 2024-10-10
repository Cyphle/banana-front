import { Database } from '../../database/database';
import { Profile } from '../profile/profile.types';
import { LoginRequest } from './login.types';

export const loginHandler = (database: Database) => (request: LoginRequest): Profile => {
  return database.readOneByField('profiles', 'username', request.username);
}