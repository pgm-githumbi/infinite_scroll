import React, { useRef, useState } from "react";
import VideoPlayError from "./VideoPlayError";

type Props = {
  children: React.ReactNode;
  videoSrc: string;
};

const VideoOnHover = ({ videoSrc, children }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoPlayError, setVideoPlayError] = useState<boolean>(false);
  const [paused, setPaused] = useState<boolean>(false);

  const handleMouseEnter = () => {
    videoRef.current
      ?.play()
      .then((_) => {
        if (paused) {
          videoRef.current?.pause();
          isHovered !== false && setIsHovered(false);
        } else setIsHovered(true);
      })
      .catch((_) => setVideoPlayError(true));
  };

  const handleMouseLeave = () => {
    if (isHovered) videoRef.current?.pause();
    else setPaused(true);
    setIsHovered(false);
  };

  const displayChildren = !isHovered ? {} : { display: "none" };
  const displayHoverVid = isHovered ? {} : { display: "none" };
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div style={displayChildren}>{children}</div>
      <div style={displayHoverVid}>
        <VideoPlayError videoPlayErrorOccurred={videoPlayError}>
          <video ref={videoRef} width="450" muted={true} height="300" controls>
            <source src={videoSrc} type="video/mp4" />
            <source src="movie.ogg" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        </VideoPlayError>
      </div>
    </div>
  );
};

export default VideoOnHover;