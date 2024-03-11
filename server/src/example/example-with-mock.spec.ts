/*
Should do examples with mock
export const findAssetsChunked = (accessToken: string, filters: RemoteDataHolderSearchFilters): Promise<RemoteAssetView[]> => {
  const limits = createLimitRangeFrom(filters.limit ?? 0, MAX_NUMBER_OF_ASSET_IN_A_CALL);
  const offsets = createOffsetRangeFrom(filters.offset ?? 0, limits);

  const requests = [...Array(limits.length).keys()]
    .map((index: number) => {
      const copyOfFilters = {
        ...filters,
        limit: limits[index],
        offset: offsets[index] == 0 ? undefined : offsets[index],
      };
      return findAssets(accessToken, copyOfFilters);
    });

  return Promise.all(requests)
    .then((assets: RemoteAssetView[][]) => R.flatten(assets))
}



const mockFindAssetsChunked = jest.fn((accessToken: string, filters: RemoteDataHolderSearchFilters): Promise<RemoteAssetView[]> => {
  return Promise.resolve([factories.remoteAssetView.build()]);
});

jest.mock('../../../common/find-assets', () => {
  return {
    __esModule: true,
    findAssetsChunked: (accessToken: string, filters: RemoteDataHolderSearchFilters) => mockFindAssetsChunked(accessToken, filters)
  };
});

test('should find assets when authorized and not chunked', async () => {
      const principal = mockPrincipalWithAccessToken();
      const params = {
        organizationCode: 'STONAL',
        offset: 0,
        type: 'BUILDING',
        format: 'JSON'
      };
      const filters = {};

      const response = await findAssetsV2Middleware(principal, params, filters);

      expect(mockRemoteFindAssets).toHaveBeenCalled();
      expect(response).toEqual({
        code: 200,
        data: [factories.assetViewV2.build()]
      });
    });
 */