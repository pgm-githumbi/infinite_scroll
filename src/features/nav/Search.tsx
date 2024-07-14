import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  getIsSearching,
  getQueryString,
  setIsSearching,
  setSearchQueryString,
} from "../../redux/ui/NavbarSlice";

const Search = () => {
  const searching = useAppSelector(getIsSearching);
  const queryString = useAppSelector(getQueryString);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    doSearch();
  };
  const doSearch = () => {
    dispatch(setIsSearching(false));
    navigate("/search");
  };
  return (
    <div className="flex-none">
      {!searching && (
        <button
          className="btn btn-ghost btn-circle"
          onClick={() => dispatch(setIsSearching(true))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      )}
      {searching && (
        <div className="form-control">
          <div className="join">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered join-item w-20 md:w-auto"
              onChange={({ target: { value } }) =>
                dispatch(setSearchQueryString(value))
              }
              onKeyDown={(e) => e.key === "Enter" && doSearch()}
            />
            {queryString === "" && (
              <button
                className="btn btn-ghost join-item rounded-r-full"
                onClick={() => dispatch(setIsSearching(false))}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
            {queryString.length > 0 && (
              <button
                className="btn btn-ghost join-item"
                onClick={handleSearch}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
