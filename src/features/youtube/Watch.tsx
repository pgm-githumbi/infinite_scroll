import React from "react";
import VideoList from "./VideoList";
import { Outlet, useNavigate } from "react-router-dom";
import { watch } from "../../routePaths";

type Props = {};

const Watch = (props: Props) => {
  return (
    <>
      <div className="flex flex-row h-full w-full m-4 justify-evenly">
        <div className="basis-full md:basis-1/4 flex flex-col grow mr-4">
          <Outlet />
          <div className="mt-4">Comments</div>
        </div>
        <div className="basis-0 md:basis-1/3 invisible md:visible">
          <VideoList width={300} height={200} />
        </div>
      </div>
    </>
  );
};

export const useClickToWatch = (videoId: number) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("to watch ", videoId);
    navigate(`/${watch}/${videoId.toString()}`);
  };

  return { onClick: handleClick };
};

export default Watch;
