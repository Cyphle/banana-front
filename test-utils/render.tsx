// ./test-utils/render.tsx
import {
  getByTestId,
  render as testingLibraryRender,
  renderHook as testingLibraryRenderHook
} from '@testing-library/react';
import React, { PropsWithChildren } from 'react';
import {
  QueryClient,
  QueryClientProvider,
  UseInfiniteQueryResult,
  UseMutationResult,
  UseQueryResult
} from '@tanstack/react-query';

export const render = (ui: React.ReactNode) => {
  const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } });

  const wrapper = ({ children }: PropsWithChildren) => {
    return (
      <QueryClientProvider client={ queryClient }>
        <div data-testid="test-container">{ children }</div>
      </QueryClientProvider>
    );
  };

  const rendered = testingLibraryRender(<>{ ui }</>, { wrapper });

  return {
    ...rendered,
    container: Array.from(getByTestId(rendered.container, 'test-container').children).filter((e) => e.tagName !== 'STYLE')[0],
  };
};

// TODO TO clean if not used in tests
export const renderQueryHook = (hook: () => UseQueryResult) => {
  const queryClient = new QueryClient();
  const wrapper = ({ children }: PropsWithChildren) => <QueryClientProvider
    client={ queryClient }>{ children }</QueryClientProvider>;

  return testingLibraryRenderHook(hook, { wrapper });
};

export const renderInfiniteQueryHook = (hook: () => UseInfiniteQueryResult) => {
  const queryClient = new QueryClient();
  const wrapper = ({ children }: PropsWithChildren) => <QueryClientProvider
    client={ queryClient }>{ children }</QueryClientProvider>;

  return testingLibraryRenderHook(hook, { wrapper });
};

export const renderMutateHook = <TData, TError, TVariables, TContext>(hook: () => UseMutationResult<TData, TError, TVariables, TContext>) => {
  const queryClient = new QueryClient();
  const wrapper = ({ children }: PropsWithChildren) => <QueryClientProvider
    client={ queryClient }>{ children }</QueryClientProvider>;

  return testingLibraryRenderHook(hook, { wrapper });
};

// export const renderContextHook = (hook: () => any) => {
//   const wrapper = ({ children }: PropsWithChildren) => <ClientContextProvider>{ children }</ClientContextProvider>;
//
//   return testingLibraryRenderHook(hook, { wrapper });
// }

// export function renderWithAppShell(ui: React.ReactNode) {
//   const rendered = testingLibraryRender(<>{ui}</>, {
//     wrapper: ({ children }: { children: React.ReactNode }) => (
//       <MantineProvider theme={StonalTheme}>
//         <ThemeProvider theme={StonalTheme}>
//             <AppShell>
//               <div data-testid="test-container">
//                 {children}
//               </div>
//             </AppShell>
//         </ThemeProvider>
//       </MantineProvider>
//     ),
//   });
//   return {
//     ...rendered,
//     container: Array.from(getByTestId(rendered.container, "test-container").children)
//       .filter(e => e.tagName !== "STYLE")[0]
//   };
// }
