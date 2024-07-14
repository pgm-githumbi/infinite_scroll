import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Homepage from "./Homepage";
import SearchPage from "./SearchPage";
import Portfolio from "./Portfolio";

const Content = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Content />}></Route>s */}
        <Route path="/about" element={<About />}></Route>
        <Route path="/homepage" element={<Homepage />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
      </Routes>
    </div>
  );
};

export default Content;
