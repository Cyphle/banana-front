import { getProfileByEmailHandler, getProfileByIdHandler } from './profile.handlers';
import { mockDatabase } from '../../testing/mock-database';
import { Profile } from './profile.types';

describe('Profile handlers', () => {
  it('should get profile by id', () => {
    const profile = getProfileByIdHandler(mockDatabase)(1);

    expect(profile).toEqual({ id: 1, username: 'john.doe', firstName: 'John', lastName: 'Doe', email: 'john.doe@banana.fr'});
  });

  it('should get profile by email', () => {
    const profile = getProfileByEmailHandler(mockDatabase)('john.doe@banana.fr');

    expect(profile).toEqual({ id: 1, username: 'john.doe', firstName: 'John', lastName: 'Doe', email: 'john.doe@banana.fr'});
  });

  it('should return index 1 when there is no profile', () => {
    const profiles: Profile[] = []
      .sort((a: Profile, b: Profile) => a.id - b.id)
      .reverse();

    const id = (profiles[0]?.id ?? 0) + 1;

    expect(id).toEqual(0);
  });

  it('should return index +1 when there are some profiles', () => {
    const profiles: Profile[] = [{
      id: 1,
      username: 'jondoe',
      email: 'johndoe@banana.fr',
      firstName: 'John',
      lastName: 'Doe'
    }]
      .sort((a: Profile, b: Profile) => a.id - b.id)
      .reverse();

    const id = (profiles[0]?.id ?? 0) + 1;

    expect(id).toEqual(2);
  });
});