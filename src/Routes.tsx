import ErrorPage from './shared/ErrorPage.tsx';
import { createBrowserRouter } from 'react-router-dom';
import { AccountsPage } from './pages/accounts/Accounts.tsx';
import { Profile } from './pages/profile/Profile.tsx';
import Main, { appLoader } from './main.tsx';
import { Home } from './pages/home/Home.tsx';
import { AccountPage, accountParamsLoader } from './pages/account/Account.tsx';

const ROUTES = [
  {
    path: '/',
    element: <Main />,
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

// @ts-ignore
export const Router = createBrowserRouter(ROUTES);