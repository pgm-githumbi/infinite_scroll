import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { selectVideoById } from "./VideosSlice";

type Props = {
  index: number;
};
const VideoComp = ({ index: id }: Props) => {
  const dispatch = useAppDispatch();
  const video = useAppSelector(selectVideoById(id, dispatch));
  return (
    <>
      VideoComp {id}
      <div>Video id: {video && video.id} </div>
    </>
  );
};

export default VideoComp;
