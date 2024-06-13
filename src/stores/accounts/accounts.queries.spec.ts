import { useFetchAccounts } from './accounts.queries';
import { getAccounts } from '../../services/accounts.service';
import { renderQueryHook } from '../../../test-utils/render';
import { waitFor } from '@testing-library/react';

jest.mock('../../services/accounts.service', () => ({
  getAccounts: jest.fn(),
}));

describe('accounts queries', () => {
  it('should fetch accounts', async () => {
    jest.mocked(getAccounts).mockResolvedValue({
      hello: 'Hello world'
    });

    const { result } = renderQueryHook(() => useFetchAccounts());

    expect(getAccounts).toHaveBeenCalled();
    await waitFor(() => expect(result.current.isSuccess).toBe(true));
  });
});