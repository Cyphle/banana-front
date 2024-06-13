import App, { appLoader } from './App.tsx';
import ErrorPage from './shared/ErrorPage.tsx';
import { createBrowserRouter } from 'react-router-dom';
import { AccountsPage } from './pages/accounts/Accounts.tsx';
import { Profile } from './pages/profile/Profile.tsx';

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
          // Index route is the default route for children
          // { index: true, element: <Index/> },
          {
            path: 'accounts',
            element: <AccountsPage/>,
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