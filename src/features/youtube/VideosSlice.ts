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

const videoUrls = [
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
];

const words =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque velit possimus quae perferendis placeat nulla, eligendi, illo, laborum impedit asperiores ab! Amet impedit labore quam cum quidem nemo neque! Debitis!";
export const fetchVideos = createAsyncThunk(
  "videos/fetchOne",
  async (id: number) => {
    const urlId = id % videoUrls.length;
    const wordList = words.split(" ");
    const randomIndex1 = Math.floor(Math.random() * wordList.length);
    const randomIndex2 = Math.floor(Math.random() * wordList.length);

    return {
      id,
      albumId: 0,
      url: videoUrls[urlId],
      thumbnailUrl: `https://picsum.photos/id/${id}/300/200`,
      title: [wordList[randomIndex1], wordList[randomIndex2]].join(" "),
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
