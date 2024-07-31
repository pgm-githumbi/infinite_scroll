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
import { yt } from "./routePaths";
import VideoList from "./features/youtube/VideoList";

const appRouter = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route path="/about" element={<About />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path={yt} element={<VideoList />} />
      <Route index element={<Navigate to={yt} replace />} />
    </Route>
  )
);

export default appRouter;
