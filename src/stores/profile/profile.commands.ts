export const createProfile = (onError: (error?: string) => void, onSuccess: () => void) => {
  const currentOrganization = useCurrentOrganization();
  const { assetIdentifier } = useParams();

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (updatedAssetInfos: UpdateAssetBody) => updateAsset(currentOrganization, assetIdentifier || '', updatedAssetInfos),
    mutationKey: [
      UPDATE_ASSET,
      currentOrganization,
      assetIdentifier,
    ],
    onError: (error: ErrorResponse) => onError(error.response?.data?.error),
    onSuccess: async () => {
      onSuccess();
      await queryClient.invalidateQueries({
        queryKey: [
          FETCH_ASSET,
          currentOrganization,
          assetIdentifier,
        ],
      });
      await queryClient.invalidateQueries({
        queryKey: [
          FETCH_ASSET_EXTERNAL_IDENTIFIERS,
          currentOrganization,
          assetIdentifier,
        ],
      });
      await queryClient.invalidateQueries({
        queryKey: [
          FETCH_HISTORY,
          currentOrganization,
          assetIdentifier,
        ],
      });
    },
  });
};