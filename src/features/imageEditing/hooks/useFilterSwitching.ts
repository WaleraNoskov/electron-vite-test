import { useAppDispatch, useAppSelector } from "../../../application/hooks.ts";
import { selectImageProcessingState } from "../model/selectors.ts";
import { trySetFilter } from "../model/thunks.ts";
import { UpdateOutputPipelineInputDto } from "../../../shared/api/dto";

export function useFilterSwitching() {
  const imageEditing = useAppSelector(selectImageProcessingState);
  const dispatch = useAppDispatch();

  // eslint-disable-next-line @typescript-eslint/require-await
  const setFilter = async (filter: number) => {
    const dto: UpdateOutputPipelineInputDto = {
      filter: filter,
      enableAutoHistogram: false,
    };

    await dispatch(trySetFilter(dto));
  };

  return {
    filter: imageEditing.filter,
    isChangingParameters: imageEditing.isChangingParameters,
    setFilter,
  };
}
