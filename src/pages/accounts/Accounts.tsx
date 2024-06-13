import { useNavigate } from 'react-router';
import { useFetchAccounts } from '../../stores/accounts/accounts.queries.ts';

export const AccountsPage = () => {
  const { isPending, isError, data, error } = useFetchAccounts();
  const navigate = useNavigate();

  if (isPending) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: { error.message }</span>
  }

  // We can assume by this point that `isSuccess === true`
  return (
    <div>
      My accounts
      { JSON.stringify(data) }
      {/*{data.map((todo) => (*/ }
      {/*  <li key={todo.id}>{todo.title}</li>*/ }
      {/*))}*/ }

      <div>
        <button onClick={ (value) => navigate(`/path/to/the/sky/${ value }`) }>Hello world</button>
      </div>
    </div>
  )
}