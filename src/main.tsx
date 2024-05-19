import ReactDOM from 'react-dom/client'
import './index.css'
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RouterProvider } from 'react-router-dom'
import { Router } from './Routes.tsx';
import { queryClient } from './react-query.config.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={ Router }/>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>,
)
