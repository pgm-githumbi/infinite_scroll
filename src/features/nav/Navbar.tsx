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
        className="navbar bg-base-100 sticky top-0 z-40 w-full 
        backdrop-blur flex-none transition-colors duration-500 
        lg:z-50 lg:border-b lg:border-slate-900/10 
        dark:border-slate-50/[0.06] 
        supports-backdrop-blur:bg-white/95 "
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
            <svg
              enableBackground="new 0 0 32 32"
              height="32px"
              id="Layer_1"
              viewBox="0 0 32 32"
              width="32px"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <path
                d="M30,6h-0.887c-0.525,0-1.029,0.207-1.404,0.576L25,9.248V8c0-1.657-1.344-3-3-3H3  C1.346,5,0,6.345,0,8v6.972V24c0,1.656,1.343,3,3,3h19c1.656,0,3-1.344,3-3v-1.221l2.709,2.672c0.375,0.369,0.879,0.576,1.404,0.576  H30c1.104,0,2-0.895,2-2V8C32,6.895,31.104,6,30,6z M3,25c-0.552,0-1-0.449-1-1V8c0-0.553,0.447-1,1-1h19c0.551,0,1,0.448,1,1v16  c0,0.551-0.449,1-1,1H3z M30,24.027h-0.887H29l-4-4V20l-1-1v-6l5-5h0.113H30V24.027z"
                fill="#333333"
                id="video"
              />
            </svg>
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
