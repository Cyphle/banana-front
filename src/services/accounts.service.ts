export interface Accounts {
  hello: string;
}

export const getAccounts = (): Promise<Accounts> => {
  return fetch('http://localhost:3000/accounts')
    .then(response => {
      console.log(response);
      return response.json();
    })
    .catch(error => console.error(error));
}