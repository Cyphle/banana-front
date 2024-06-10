
// const mockNavigate = jest.fn();
// jest.mock('react-router', () => ({
//   useLocation: () => ({
//     hash: '#assets',
//     pathname: '/asset-type/BUILDING',
//   }),
//   useNavigate: () => mockNavigate,
//   useParams: () => ({
//     assetType: 'BUILDING',
//   }),
// }));
//
// jest.mock('@mantine/core', () => ({
//   ...jest.requireActual<typeof import('@mantine/core')>('@mantine/core'),
//   Button: ({ children }: PropsWithChildren) => (
//     <button type={'submit'}>{children}</button>
//   ),
//   Drawer: ({ children }: PropsWithChildren) => <div>{children}</div>,
//   Flex: ({ children }: PropsWithChildren) => <div>{children}</div>,
// }));
//
// jest.mock('components/Breadcrumbs/Breadcrumbs', () => ({
//   Breadcrumbs: () => <div>BREADCRUMBS</div>,
// }));
//
// jest.mock('pages/AssetPage/EditAssetDrawer/EditAssetDrawer', () => ({
//   EditAssetDrawer: () => <div>EDIT_ASSET_DRAWER</div>,
// }));
//
// jest.mock('hooks/routes/useBuildRouteWithOrganization', () => ({
//   useBuildRouteWithOrganization: jest.fn(() =>
//     jest.fn((route: string) => `ORGA/${route}`)
//   ),
// }));
//
// jest.mock('stores/assets/assets.actions', () => ({
//   useFetchAsset: jest.fn(),
// }));
//
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
    (useFetchAsset as jest.Mock).mockImplementation(() => ({
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
      isLoading: false,
    }));

    const { container } = render(<AssetPage />);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div>
          <div>
            BREADCRUMBS
          </div>
          <div
            class="styled-components-test-class-0 m-1b7284a3 mantine-Paper-root"
          >
            <div>
              <p
                class="mantine-focus-auto value m-b6d8b162 mantine-Text-root"
              >
                A1
              </p>
              <p
                class="mantine-focus-auto label m-b6d8b162 mantine-Text-root"
              >
                CODE
              </p>
            </div>
            <div
              class="m-3eebeb36 mantine-Divider-root"
              data-orientation="vertical"
              role="separator"
            />
            <div>
              <p
                class="mantine-focus-auto value m-b6d8b162 mantine-Text-root"
              >
                Université
              </p>
              <p
                class="mantine-focus-auto label m-b6d8b162 mantine-Text-root"
              >
                NAME
              </p>
            </div>
            <div
              class="m-3eebeb36 mantine-Divider-root"
              data-orientation="vertical"
              role="separator"
            />
            <div>
              <p
                class="mantine-focus-auto value m-b6d8b162 mantine-Text-root"
              >
                2001-06-16
              </p>
              <p
                class="mantine-focus-auto label m-b6d8b162 mantine-Text-root"
              >
                EFFECTIVE_DATE
              </p>
            </div>
            <div
              class="m-3eebeb36 mantine-Divider-root"
              data-orientation="vertical"
              role="separator"
            />
            <div>
              <p
                class="mantine-focus-auto value m-b6d8b162 mantine-Text-root"
              >
                2025-06-16
              </p>
              <p
                class="mantine-focus-auto label m-b6d8b162 mantine-Text-root"
              >
                EXPIRATION_DATE
              </p>
            </div>
            <button
              class="mantine-focus-auto mantine-active styled-components-test-class-1 m-8d3f4000 mantine-ActionIcon-root m-87cf2631 mantine-UnstyledButton-root"
              data-size="md"
              style="--ai-size: var(--ai-size-md); --ai-bg: #E2F8EC; --ai-hover: rgba(203, 223, 212, 1); --ai-color: var(--mantine-color-white); --ai-bd: calc(0.0625rem * var(--mantine-scale)) solid transparent;"
              type="button"
            >
              <span
                aria-hidden="true"
                class="m-302b9fb1 mantine-ActionIcon-loader"
              >
                <span
                  class="m-b34414df m-5ae2e3c mantine-Loader-root"
                  style="--loader-size: calc(var(--ai-size) * 0.55); --loader-color: var(--ai-color);"
                />
              </span>
              <span
                class="m-8d3afb97 mantine-ActionIcon-icon"
              >
                <penicon />
              </span>
            </button>
          </div>
        </div>
        <div>
          <div>
            <div>
              #data
            </div>
            <div>
              #externalIdentifiers
            </div>
            <div>
              #linkedAssets
            </div>
            <div>
              #history
            </div>
          </div>
          <div>
            DATA_TAB
          </div>
        </div>
        <div>
          EDIT_ASSET_DRAWER
        </div>
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
