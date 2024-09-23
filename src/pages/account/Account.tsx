import { useLoaderData } from 'react-router-dom';
import { useFetchAccount } from '../../stores/accounts/accounts.queries.ts';
import { Account, TransactionType } from '../../stores/accounts/accounts.type.ts';
import { useNavigate } from 'react-router';
import {
  DisplayableTransaction,
  filterDisplayableTransactions,
  Transactions
} from '../../components/transactions/Transactions.tsx';
import {
  fromAccountTransactionsToDisplayableTransactions,
  fromRecurrentTransactionsToDisplayableTransactions
} from '../../helpers/transaction.ts';
import { AccountIndicators } from '../../components/account-indicators/AccountIndicators.tsx';
import { useEffect, useState } from 'react';

interface AccountParams {
  accountId: string;
}

export async function accountParamsLoader({ params }: { params: { [key: string]: string } }): Promise<AccountParams> {
  return {
    accountId: params.id
  };
}

// TODO to be tested
export const AccountPage = () => {
  const params = useLoaderData() as AccountParams;
  const [transactions, setTransactions] = useState<DisplayableTransaction[]>([]);
  const [displayableTransactions, setDisplayableTransactions] = useState<DisplayableTransaction[]>([]);
  const { isPending, isError, data, error } = useFetchAccount(parseInt(params.accountId));
  const navigate = useNavigate();

  useEffect(() => {
    if (!isPending && !isError) {
      const account = data as Account;
      const transactions = [
        ...fromRecurrentTransactionsToDisplayableTransactions(account.recurrentTransactions),
        ...fromAccountTransactionsToDisplayableTransactions(account.transactions),
      ];
      setTransactions(transactions);
      setDisplayableTransactions(transactions);
    }
  }, [isPending, data,]);

  // // TODO il faut faire un high order component avec template pour faire du UI skeleton avec is loading et is error
  if (isPending) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: { error.message }</span>
  }

  const account = data as Account;
  const filterTransactions = (type: TransactionType) => (_: any) => {
    const filtered = filterDisplayableTransactions(transactions, type);
    setDisplayableTransactions(filtered);
  }

  return (
    <div>
      <h1>{ account.summary.name }</h1>
      <h2>{ account.summary.date }</h2>

      <section className="actions">
        <button onClick={ filterTransactions('ALL') }>Toutes les opérations</button>
        <button onClick={ filterTransactions('CREDIT') }>Crédits</button>
        <button onClick={ filterTransactions('EXPENSE') }>Dépenses</button>
        <button onClick={ filterTransactions('BUDGET') }>Budgets</button>
        <button onClick={ filterTransactions('CHARGE') }>Charges</button>
        <button onClick={ () => navigate(`/accounts/${ account.summary.id }/parameters`) }>Paramètres</button>
      </section>

      // TODO notes
      <p>Notes: au clic sur un des boutons, en fait il faut filtrer au lieu de refaire un appel.
        <br/>
        du coup, il faudrait plutôt un composant d'affichage de tableau.<br/>
        il faudrait un composant qui réfléchir et qui affiche en fonction du clic et des composnats d'affichage.
      </p>

      <AccountIndicators
        startOfPeriodAmount={ 1000 }
        currentPeriodAmount={ 1000 }
        endOfPeriodProjectedAmount={ 1000 }
      >
      </AccountIndicators>

      <Transactions transactions={ displayableTransactions }/>
    </div>
  )
}