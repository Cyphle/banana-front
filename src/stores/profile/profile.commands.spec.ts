describe('createProfile', () => {
  const onError = jest.fn();
  const onSuccess = jest.fn();

  const updateAssetBody: UpdateAssetBody = {
    effectiveDate: '2021-01-01',
    expirationDate: '2021-12-31',
    externalIdentifiers: [
      {
        identifier: 'identifierA',
        sourceName: 'Premiance',
        sourceType: 'ERP',
      },
    ],
    name: 'Asset 1',
  };

  beforeEach(() => {
    (updateAsset as jest.Mock).mockClear();
  });

  it('should update asset', async () => {
    jest.spyOn(reactRouter, 'useParams').mockReturnValue({
      assetIdentifier: 'identifierA',
    });
    const { result } = renderMutateHook(() => useUpdateAsset(onError, onSuccess));
    (updateAsset as jest.Mock).mockImplementation(() => Promise.resolve());

    result.current.mutate(updateAssetBody);

    await waitFor(() => expect(updateAsset).toHaveBeenCalledWith('ORGA', 'identifierA', updateAssetBody));
    await waitFor(() => expect(onSuccess).toHaveBeenCalled());
  });

  it('should handle error when it has a message', async () => {
    const errorResponse = {
      response: {
        data: {
          error: 'Internal Server Error',
        },
        status: 500,
      },
    };
    (updateAsset as jest.Mock).mockImplementation(() => Promise.reject(errorResponse));

    jest.spyOn(reactRouter, 'useParams').mockReturnValue({
      assetIdentifier: 'identifierA',
    });
    const { result } = renderMutateHook(() => useUpdateAsset(onError, onSuccess));

    result.current.mutate(updateAssetBody);

    await waitFor(() => expect(updateAsset).toHaveBeenCalledWith('ORGA', 'identifierA', updateAssetBody));
    await waitFor(() => expect(onError).toHaveBeenCalledWith('Internal Server Error'));
  });

  it('should handle error when no message', async () => {
    const errorResponse = {
      response: {
        data: undefined,
        status: 500,
      },
    };
    (updateAsset as jest.Mock).mockImplementation(() => Promise.reject(errorResponse));

    jest.spyOn(reactRouter, 'useParams').mockReturnValue({
      assetIdentifier: 'identifierA',
    });
    const { result } = renderMutateHook(() => useUpdateAsset(onError, onSuccess));

    result.current.mutate(updateAssetBody);

    await waitFor(() => expect(updateAsset).toHaveBeenCalledWith('ORGA', 'identifierA', updateAssetBody));
    await waitFor(() => expect(onError).toHaveBeenCalledWith(undefined));
  });

  it('should invalidate queries after updating asset', async () => {
    jest.spyOn(reactRouter, 'useParams').mockReturnValue({
      assetIdentifier: 'identifierA',
    });
    const invalidateQueriesMock = jest.fn();
    (useQueryClient as jest.Mock).mockReturnValue({
      invalidateQueries: invalidateQueriesMock,
    });
    (updateAsset as jest.Mock).mockImplementation(() => Promise.resolve());

    const { result } = renderMutateHook(() => useUpdateAsset(onError, onSuccess));

    result.current.mutate(updateAssetBody);

    await waitFor(() => expect(invalidateQueriesMock).toHaveBeenCalledWith({
      queryKey: [
        'FETCH_ASSET',
        'ORGA',
        'identifierA',
      ],
    }));
    await waitFor(() => expect(invalidateQueriesMock).toHaveBeenCalledWith({
      queryKey: [
        'FETCH_ASSET_EXTERNAL_IDENTIFIERS',
        'ORGA',
        'identifierA',
      ],
    }));
    await waitFor(() => expect(invalidateQueriesMock).toHaveBeenCalledWith({
      queryKey: [
        'FETCH_HISTORY',
        'ORGA',
        'identifierA',
      ],
    }));
  });
});