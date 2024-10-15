import { useNavigate } from 'react-router';
import { useFetchAccountSummaries } from '../../stores/account/account.queries.ts';
import { AccountSummary } from '../../stores/account/account.types.ts';

// TODO on a besoin du mois courant en fait pour récupérer les choses
export const AccountsPage = () => {
  const { isPending, isError, data, error } = useFetchAccountSummaries();
  const navigate = useNavigate();

  // TODO il faut faire un high order component avec template pour faire du UI skeleton avec is loading et is error
  if (isPending) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: { error.message }</span>
  }

  return (
    <div>
      <section>
        <div className="indicator">
          <span className="indicator__label">Total montants courants</span>
          <span className="indicator__value">1000€</span>
        </div>
        <div className="indicator">
          <span className="indicator__label">Total montants projetés</span>
          <span className="indicator__value">1000€</span>
        </div>
        <div className="indicator">
          <span className="indicator__label">Total épargnes</span>
          <span className="indicator__value">1000€</span>
        </div>
      </section>

      <h1>Mes comptes</h1>

      <ul className="accounts">
        { (data as AccountSummary[]).map((account: AccountSummary) => (
          <li key={ account.id }>
            <span>{ account.name }</span>
            <span>{ account.startingBalance }</span>
            <span>{ account.projectedBalance }</span>
            <button onClick={ () => navigate(`/accounts/${ account.id }`) }>Go</button>
          </li>
        ))
        }
      </ul>
    </div>
  )
}