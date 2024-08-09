import { Database } from '../../database/database';
import { Profile } from './profile.types';

export const getProfileByIdHandler = (database: Database) => (id: number): Profile => {
  return database.readOneById('profiles', id);
}

export const getProfileByEmailHandler = (database: Database) => (email: string): Profile => {
  return database.readOneByField('profiles', 'email', email);
}