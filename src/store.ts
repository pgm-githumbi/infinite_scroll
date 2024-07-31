import { configureStore } from "@reduxjs/toolkit";
import NavbarSlice from "./redux/ui/NavbarSlice";
import videosSlice from "./features/youtube/VideosSlice";

const store = configureStore({
  reducer: { navbar: NavbarSlice, videos: videosSlice },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;
