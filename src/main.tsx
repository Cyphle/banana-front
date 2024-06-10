import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { Router } from './Routes.tsx';
import { queryClient } from './react-query.config.ts';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={ Router }/>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>,
)
