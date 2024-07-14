import {
  createHashRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Navbar from "./features/nav/Navbar";
import About from "./features/content/About";
import Homepage from "./features/content/Homepage";
import SearchPage from "./features/content/SearchPage";
import Portfolio from "./features/content/Portfolio";

const appRouter = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route path="/about" element={<About />}></Route>
      <Route path="/homepage" element={<Homepage />}></Route>
      <Route path="/search" element={<SearchPage />}></Route>
      <Route path="/portfolio" element={<Portfolio />}></Route>
    </Route>
  )
);

export default appRouter;
