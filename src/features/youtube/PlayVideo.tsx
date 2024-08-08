import React, { useEffect, useRef } from "react";
import VideoPlayError from "./VideoPlayError";
import { fetchVideos, selectVideoById } from "./VideosSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useParams } from "react-router-dom";
import ScrollToTop from "../utils/ScrollToTop";

type Props = {};

type PlayVideoParams = {
  videoId: string;
};
const PlayVideo = (props: Props) => {
  const { videoId } = useParams<PlayVideoParams>();
  const dispatch = useAppDispatch();
  const video = useAppSelector((state) =>
    selectVideoById(state, Number(videoId))
  );
  const videoRef = useRef<HTMLVideoElement>(null);
  if (!video) dispatch(fetchVideos(Number(videoId)));

  useEffect(() => {
    if (video && videoRef.current) {
      videoRef.current.volume = 0.2;
      videoRef.current.play();
    }
  }, [video, videoRef]);

  return (
    <>
      <ScrollToTop>
        <VideoPlayError videoPlayErrorOccurred={!video || !video.url}>
          <video
            ref={videoRef}
            width={700}
            height={200}
            src={(video && video?.url) || ""}
            controls
          >
            {/* <source src={video.url} type="video/mp4" /> */}
            <source src="movie.ogg" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        </VideoPlayError>
      </ScrollToTop>
    </>
  );
};

export default PlayVideo;
