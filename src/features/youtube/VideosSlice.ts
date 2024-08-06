import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
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

export const fetchVideos = createAsyncThunk(
  "videos/fetchOne",
  async (id: number) => {
    return {
      id,
      albumId: 0,
      url: `https://picsum.photos/id/${id}/200/200`,
      thumbnailUrl: `https://picsum.photos/id/${id}/300/200`,
      title: "",
    };
  }
);

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

export const {
  selectAll: selectAllVideos,
  selectTotal: selectTotalVideos,
  selectIds: selectVideoIds,
  selectEntities: selectVideoEntities,
  selectById: selectVideoById,
} = videosAdapter.getSelectors((state: RootState) => state.videos);
