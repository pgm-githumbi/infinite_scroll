import React from "react";

type Props = {
  children: React.ReactNode;
  videoPlayErrorOccurred: boolean;
};

const VideoPlayError = ({
  children,
  videoPlayErrorOccurred = false,
}: Props) => {
  return (
    <>
      {videoPlayErrorOccurred && "VideoPlayError Occurred"}
      {!videoPlayErrorOccurred && children}
    </>
  );
};

export default VideoPlayError;
