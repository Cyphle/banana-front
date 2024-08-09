import { useFetchAccounts } from './accounts.queries';
import { getAccounts } from '../../services/accounts.service';
import { waitFor } from '@testing-library/react';
import { renderQueryHook } from '../../../test-utils/render.tsx';

jest.mock('../../services/accounts.service', () => ({
  getAccounts: jest.fn(),
}));

describe('accounts queries', () => {
  it('should fetch accounts', async () => {
    jest.mocked(getAccounts).mockResolvedValue([{
      id: 1,
      name: 'My Account',
      type: 'PERSONAL',
      balance: 100.0,
      projectedBalance: 100.0
    }]);

    const { result } = renderQueryHook(() => useFetchAccounts());

    expect(getAccounts).toHaveBeenCalled();
    await waitFor(() => expect(result.current.isSuccess).toBe(true));
  });
});