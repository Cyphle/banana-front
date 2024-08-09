import { getProfileByEmailHandler, getProfileByIdHandler } from './profile.handlers';
import { mockDatabase } from '../../testing/mock-database';

describe('Profile handlers', () => {
  it('should get profile by id', () => {
    const profile = getProfileByIdHandler(mockDatabase)(1);

    expect(profile).toEqual({ id: 1, username: 'john.doe', firstName: 'John', lastName: 'Doe', email: 'john.doe@banana.fr'});
  });

  it('should get profile by email', () => {
    const profile = getProfileByEmailHandler(mockDatabase)('john.doe@banana.fr');

    expect(profile).toEqual({ id: 1, username: 'john.doe', firstName: 'John', lastName: 'Doe', email: 'john.doe@banana.fr'});
  });
});