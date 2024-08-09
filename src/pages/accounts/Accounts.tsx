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
      Here are some indicators
      <ul>
        <li>Liste des comptes avec leur nom et solde courant et projeté</li>
        <li>Dernières opérations sur les 3 derniers jours</li>
        <li>Montant restant, projetés et débits à venir</li>
      </ul>

      Il faut
      <ul>
        <li>Un bouton "créer un suivi de compte bancaire"</li>
      </ul>

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