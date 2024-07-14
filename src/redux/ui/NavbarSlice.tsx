import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface navbarState {
  queryString: string;
  isSearching: boolean;
}
const initialState: navbarState = {
  queryString: "",
  isSearching: false,
};

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setIsSearching: (state, action: PayloadAction<boolean>) => {
      state.isSearching = action.payload;
    },
    setSearchQueryString: (state, action: PayloadAction<string>) => {
      state.queryString = action.payload;
    },
  },
});

export const { setIsSearching, setSearchQueryString } = navbarSlice.actions;
export default navbarSlice.reducer;

export const getIsSearching = (state: RootState) => state.navbar.isSearching;
export const getQueryString = (state: RootState) => state.navbar.queryString;
