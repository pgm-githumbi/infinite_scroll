import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  ThunkDispatch,
  UnknownAction,
} from "@reduxjs/toolkit";
import { RootState } from "../../store";

enum Status {
  pending,
  fulfilled,
  rejected,
  settled,
}

interface Video {
  id: number;
  albumId: number;
  url: string;
  thumbnailUrl: string;
  title: string;
  fetchStatus: Status;
}

const videosAdapter = createEntityAdapter<Video>();
const initialState = videosAdapter.getInitialState({
  defaultVideo: {
    albumId: 0,
    url: "",
    thumbnailUrl: "",
    title: "",
    fetchStatus: Status.pending,
  },
});

const fetchVideos = createAsyncThunk("videos/fetchOne", async (id: number) => {
  return {
    id,
    albumId: 0,
    url: "",
    thumbnailUrl: "",
    title: "",
  };
});

const videosSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchVideos.pending, (state, action) => {
      videosAdapter.upsertOne(state, {
        ...state.defaultVideo,
        id: action.meta.arg,
        fetchStatus: Status.pending,
      });
    });
    builder.addCase(fetchVideos.fulfilled, (state, action) => {
      videosAdapter.upsertOne(state, {
        ...action.payload,
        fetchStatus: Status.fulfilled,
      });
    });
    builder.addCase(fetchVideos.rejected, (state, action) => {
      videosAdapter.upsertOne(state, {
        ...state.defaultVideo,
        id: action.meta.arg,
      });
    });
  },
});

export default videosSlice.reducer;

export const selectVideoById =
  (id: number, dispatch: ThunkDispatch<RootState, number, UnknownAction>) =>
  (state: RootState) => {
    const selectors = videosAdapter.getSelectors(
      (state: RootState) => state.videos
    );
    let vid = selectors.selectById(state, id);
    if (vid) return vid;
    dispatch(fetchVideos(id));
    return undefined;
  };

export const {
  selectAll: selectAllVideos,
  selectTotal: selectTotalVideos,
  selectIds: selectVideoIds,
  selectEntities: selectVideoEntities,
} = videosAdapter.getSelectors((state: RootState) => state.videos);
