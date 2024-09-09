// TODO to be tested
import { useLoaderData } from 'react-router-dom';

interface AccountParametersParams {
  accountId: string;
}

export async function accountParametersParamsLoader({ params }: { params: { [key: string]: string }}): Promise<AccountParametersParams> {
  return {
    accountId: params.id
  };
}

export const AccountParameters = () => {
  const params = useLoaderData() as AccountParametersParams;
  console.log(params);

  return (
    <div>
      Paramétrage du compte { params.accountId }
    </div>
  )
}