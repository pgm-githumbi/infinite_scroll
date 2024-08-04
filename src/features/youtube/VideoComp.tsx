import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchVideos, selectVideoById } from "./VideosSlice";

type Props = {
  index: number;
};
const VideoComp = ({ index: id }: Props) => {
  const dispatch = useAppDispatch();

  const video = useAppSelector((state) => selectVideoById(state, id));
  if (!video) {
    dispatch(fetchVideos(id));
    return <div>Video {id} not yet fetched</div>;
  }
  return (
    <>
      VideoComp {id}
      <div>Video id: {video && video.id} </div>
    </>
  );
};

export default VideoComp;
