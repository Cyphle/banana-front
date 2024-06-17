import { Database } from './database';

describe('In memory database', () => {
  test('should get mock data and store them in memory', () => {
    const database = new Database();

    expect(database.dump()).toEqual({
      accounts: [{
        'id': 1,
        'name': 'Commun CIC'
      }],
      profiles: [{
        "id": 1,
        "username": "john.doe",
        "firstName": "John",
        "lastName": "Doe",
        "email": "john.doe@banana.fr"
      }],
    });
  });
});