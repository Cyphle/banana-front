import { render } from '../../../test-utils/render.tsx';
import { AccountsPage } from './Accounts.tsx';
import { useFetchAccounts } from '../../stores/accounts/accounts.queries';

jest.mock('react-router', () => ({
  useNavigate: jest.fn(),
}));

jest.mock('../../stores/accounts/accounts.queries', () => ({
  useFetchAccounts: jest.fn(),
}));

// jest.mock('hooks/useCurrentOrganization', () => ({
//   useCurrentOrganization: jest.fn(() => Promise.resolve('ORGA')),
// }));
//
// jest.mock('components/Loader/Loader', () => ({
//   Loader: () => <div>LOADING</div>,
// }));
//
// jest.mock('components/Tabs/Tab', () => ({
//   Tab: ({
//           onClick = () => {}, value
//         }: TabProps) => (
//     <div onClick={() => onClick(value)}>{value}</div>
//   ),
// }));
//
// jest.mock('./DataTab/DataTab', () => ({
//   DataTab: () => <div>DATA_TAB</div>,
// }));

describe('Accounts Page', () => {
  it('should render data', () => {
    (useFetchAccounts as jest.Mock).mockImplementation(() => ({
      data: {
        assetType: 'BUILDING',
        effectiveDate: '2001-06-16',
        expirationDate: '2025-06-16',
        externalIdentifier: {
          identifier: 'A1',
          sourceName: 'Premiance',
          sourceType: 'ERP',
        },
        name: 'Université',
        stonalIdentifier: 'identifierA1',
      },
      isPending: false,
    }));

    const { container } = render(<AccountsPage/>);

    expect(container).toMatchInlineSnapshot(`
      <div>
        My accounts
      </div>
    `);
  });

  // it('should render in loading state', () => {
  //   (useFetchAsset as jest.Mock).mockImplementation(() => ({
  //     isLoading: true,
  //   }));
  //
  //   const { container } = render(<AssetPage />);
  //
  //   expect(container).toMatchInlineSnapshot(`
  //     <div>
  //       <div>
  //         LOADING
  //       </div>
  //     </div>
  //   `);
  // });
  //
  // it('should render in error state', () => {
  //   (useFetchAsset as jest.Mock).mockImplementation(() => ({
  //     isError: true,
  //   }));
  //
  //   const { container } = render(<AssetPage />);
  //
  //   expect(container).toMatchInlineSnapshot(`
  //     <div>
  //       <div
  //         class=""
  //         style="min-height: var(--mantine-spacing-lg);"
  //       />
  //       <div
  //         class="m-7485cace mantine-Container-root"
  //       >
  //         LOADING_ERROR
  //       </div>
  //     </div>
  //   `);
  // });

  // describe('should navigate', () => {
  //   beforeAll(() => {
  //     (useFetchAsset as jest.Mock).mockImplementation(() => ({
  //       data: {
  //         assetType: 'BUILDING',
  //         effectiveDate: '2001-06-16',
  //         expirationDate: '2025-06-16',
  //         externalIdentifier: {
  //           identifier: 'A1',
  //           sourceName: 'Premiance',
  //           sourceType: 'ERP',
  //         },
  //         name: 'Université',
  //         stonalIdentifier: 'identifierA1',
  //       },
  //       isLoading: false,
  //     }));
  //   });
  //
  //   it('to data tab', () => {
  //     render(<AssetPage />);
  //
  //     fireEvent.click(screen.getByText('#data'));
  //
  //     expect(mockNavigate).toHaveBeenCalledWith('/asset-type/BUILDING#data');
  //   });
  //
  //   it('to externalIdentifiers tab', () => {
  //     render(<AssetPage />);
  //
  //     fireEvent.click(screen.getByText('#externalIdentifiers'));
  //
  //     expect(mockNavigate).toHaveBeenCalledWith(
  //       '/asset-type/BUILDING#externalIdentifiers'
  //     );
  //   });
  //
  //   it('to linkedAssets tab', () => {
  //     render(<AssetPage />);
  //
  //     fireEvent.click(screen.getByText('#linkedAssets'));
  //
  //     expect(mockNavigate).toHaveBeenCalledWith(
  //       '/asset-type/BUILDING#linkedAssets'
  //     );
  //   });
  // });
});
