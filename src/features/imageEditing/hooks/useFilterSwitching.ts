import { useAppDispatch, useAppSelector } from "../../../application/hooks.ts";
import { selectImageProcessingState } from "../model/selectors.ts";
import { trySetFilter } from "../model/thunks.ts";

export function useFilterSwitching() {
  const imageEditing = useAppSelector(selectImageProcessingState);
  const dispatch = useAppDispatch();

  // eslint-disable-next-line @typescript-eslint/require-await
  const setFilter = async (filter: number) => {
    await dispatch(trySetFilter(filter));
  };

  return {
    filter: imageEditing.filter,
    isChangingParameters: imageEditing.isChangingParameters,
    setFilter,
  };
}
