import { getAccounts } from '../../services/accounts.service.ts';
import { useNavigate } from 'react-router';
import { useQuery } from '@tanstack/react-query';

export const Accounts = () => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['accounts'],
    queryFn: getAccounts
  });
  const navigate = useNavigate();

  if (isPending) {
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

      <div><button onClick={(value) => navigate(`/path/to/the/sky/${value}`)}>Hello world</button></div>
    </>
  )
}