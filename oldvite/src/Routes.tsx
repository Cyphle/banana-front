import App, { appLoader } from './App.tsx';
import ErrorPage from './shared/ErrorPage.tsx';
import { createBrowserRouter } from 'react-router-dom';
import { AccountsPage } from './pages/accounts/Accounts.tsx';
import { Profile } from './pages/profile/Profile.tsx';
import { accountParamsLoader, AccountPage } from '@/pages/account/Account.tsx';
import { Home } from '@/pages/home/Home.tsx';

const ROUTES = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage/>,
    loader: appLoader,
    children: [
      {
        errorElement: <ErrorPage/>,
        children: [
          { index: true, element: <Home/> },
          {
            path: 'accounts',
            element: <AccountsPage/>,
          },
          {
            path: 'accounts/:id',
            element: <AccountPage/>,
            loader: accountParamsLoader,
          },
          {
            path: 'profile',
            element: <Profile/>,
          },
        ]
      }
    ]
  },
]

export const Router = createBrowserRouter(ROUTES);