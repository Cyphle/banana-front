import { waitFor } from '@testing-library/react';
import { renderQueryHook } from '../../../test-utils/render';
import { getUserInfo } from '../../services/user.service';
import { useUserInfo } from './user.queries';
import { some } from '../../helpers/option';

jest.mock('../../services/user.service', () => ({
  getUserInfo: jest.fn()
}));

describe('user queries', () => {
  test('should fetch user info', async () => {
    jest.mocked(getUserInfo).mockResolvedValue(some({
      username: 'testuser',
      firstName: 'Test',
      lastName: 'User',
      email: 'test@example.com'
    }));

    const { result } = renderQueryHook(() => useUserInfo());

    expect(getUserInfo).toHaveBeenCalled();
    await waitFor(() => expect(result.current.isSuccess).toBe(true));
  });
});
