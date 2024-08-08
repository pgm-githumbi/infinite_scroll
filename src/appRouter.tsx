import React from "react";
import {
  createHashRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import Navbar from "./features/nav/Navbar";
import About from "./features/content/About";
import Homepage from "./features/content/Homepage";
import SearchPage from "./features/content/SearchPage";
import Portfolio from "./features/content/Portfolio";
import { watch, yt } from "./routePaths";
import VideoList from "./features/youtube/VideoList";
import Watch from "./features/youtube/Watch";
import PlayVideo from "./features/youtube/PlayVideo";

const appRouter = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route path="/about" element={<About />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path={yt} element={<VideoList />} />
      <Route path={watch} element={<Watch />}>
        <Route index element={<Navigate to={`0`} />} />
        <Route path=":videoId" element={<PlayVideo />} />
      </Route>

      <Route index element={<Navigate to={yt} replace />} />
    </Route>
  )
);

export default appRouter;
