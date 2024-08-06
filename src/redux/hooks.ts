import { Action } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "../hooks";
import { RootState } from "../store";

export const useSelectOrFetch = <SelectorReturn>(
  selector: (s: RootState) => SelectorReturn,
  fetcher: () => Action
) => {
  const dispatch = useAppDispatch();
  const dataItem = useAppSelector(selector);

  if (!dataItem) {
    dispatch(fetcher());
    return undefined;
  }
  return dataItem;
};
