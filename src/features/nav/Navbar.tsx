import React from "react";
import Dropdown from "./Dropdown";
import Search from "./Search";
import Notif from "./Notif";
import { Link } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};
const Navbar = ({ children }: Props) => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <Dropdown>
            <li>
              <Link to="/homepage">homepage</Link>
            </li>
            <li>
              <Link to="/portfolio">portfolio</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
          </Dropdown>
        </div>
        <div className="navbar-center">
          <Link to="/homepage" className="btn btn-ghost text-xl text-zinc-700">
            Project
          </Link>
        </div>
        <div className="navbar-end">
          <div className="flex flex-row">
            <Search />
            <Notif />
          </div>
        </div>
      </div>
      <div>{children}</div>
    </>
  );
};

export default Navbar;
