import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { getAccount, getAccounts } from '../../services/accounts.service.ts';

export const useFetchAccounts = (): UseQueryResult => {
  return useQuery({
    queryKey: ['accounts'],
    queryFn: getAccounts
  });
}

// TODO to be tested
export const useFetchAccount = (id: number): UseQueryResult => {
  return useQuery({
    queryKey: ['account', id],
    queryFn: () => getAccount(id)
  });
}