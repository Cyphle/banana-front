import { getUserInfo, responseToUserInfo } from './user.service';
import { getOne } from '../helpers/http';
import { some, none } from '../helpers/option';
import { UserInfo } from '../stores/user/user.types';

jest.mock('../helpers/http');

describe('user.service', () => {
  describe('userInfo', () => {
    test('should call getOne with correct parameters', async () => {
      (getOne as jest.Mock).mockResolvedValue({});
      await getUserInfo();
      expect(getOne).toHaveBeenCalledWith('user/info', responseToUserInfo);
    });

    test('should return the result of getOne', async () => {
      const mockUserInfo: UserInfo = {
        username: 'testuser',
        firstName: 'Test',
        lastName: 'User',
        email: 'test@example.com'
      };
      (getOne as jest.Mock).mockResolvedValue(some(mockUserInfo));
      
      const result = await getUserInfo();
      
      expect(result).toEqual(some(mockUserInfo));
    });

    test('should return none when getOne returns undefined', async () => {
      (getOne as jest.Mock).mockResolvedValue(undefined);
      
      const result = await getUserInfo();
      
      expect(result).toEqual(none);
    });
  });

  describe('responseToUserInfo', () => {
    test('should return none when data is undefined', () => {
      const result = responseToUserInfo(undefined);
      expect(result).toEqual(none);
    });

    test('should return some with UserInfo when data is provided', () => {
      const mockData = {
        username: 'testuser',
        firstName: 'Test',
        lastName: 'User',
        email: 'test@example.com'
      };
      const result = responseToUserInfo(mockData);
      expect(result).toEqual(some(mockData));
    });
  });
});
