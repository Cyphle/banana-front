import { useFetchAccounts } from './account.queries.ts';
import { getAccounts } from '../../services/account.service.ts';
import { waitFor } from '@testing-library/react';
import { renderQueryHook } from '../../../test-utils/render.tsx';

jest.mock('../../services/account.service.ts', () => ({
  getAccounts: jest.fn(),
}));

describe('account queries', () => {
  it('should fetch account', async () => {
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