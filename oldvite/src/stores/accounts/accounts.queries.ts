import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { getAccounts } from '@/services/accounts.service.ts';

export const useFetchAccounts = (): UseQueryResult => {
  return useQuery({
    queryKey: ['accounts'],
    queryFn: getAccounts
  });
}