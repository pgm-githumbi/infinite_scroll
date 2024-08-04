import React from "react";
import Dropdown from "./Dropdown";
import Search from "./Search";
import Notif from "./Notif";
import { Link, Outlet } from "react-router-dom";

type Props = {};
const Navbar: React.FC<Props> = (props) => {
  return (
    <>
      <div
        className="navbar bg-base-300 sticky top-0 z-40 w-full 
        backdrop-blur flex-none transition-colors duration-500 
        lg:z-50 lg:border-b lg:border-slate-900/10 
        dark:border-slate-50/[0.06] bg-white 
        supports-backdrop-blur:bg-white/95
        dark:bg-slate-900/75"
      >
        <div className="navbar-start">
          <Dropdown>
            <li>
              <Link to="/homepage">homepage</Link>
            </li>
            {/* <li>
              <Link to="/portfolio">portfolio</Link>
            </li> */}
            <li>
              <Link to="/about">about</Link>
            </li>
          </Dropdown>
        </div>
        <div className="navbar-center">
          <Link to="/homepage" className="btn btn-ghost text-xl text-zinc-700">
            Youtube
          </Link>
        </div>
        <div className="navbar-end">
          <div className="flex flex-row">
            <Search />
            <Notif />
          </div>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;
