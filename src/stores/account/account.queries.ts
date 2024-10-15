import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { getAccount, getAccountSummaries } from '../../services/account.service.ts';

export const useFetchAccountSummaries = (): UseQueryResult => {
  return useQuery({
    queryKey: ['account'],
    queryFn: getAccountSummaries
  });
}

// TODO to be tested
export const useFetchAccount = (id: number): UseQueryResult => {
  return useQuery({
    queryKey: ['account', id],
    queryFn: () => getAccount(id)
  });
}