import { useQuery } from 'react-query';
import { getAccounts } from '../../services/accounts.service.ts';

export const Accounts = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['accounts'],
    queryFn: getAccounts
  });

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: { error.message }</span>
  }

  // We can assume by this point that `isSuccess === true`
  return (
    <>
      My accounts
      {JSON.stringify(data)}
      {/*{data.map((todo) => (*/}
      {/*  <li key={todo.id}>{todo.title}</li>*/}
      {/*))}*/}
    </>
  )
}