import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchVideos, selectVideoById } from "./VideosSlice";
import ImgLoad from "./ImgLoad";
import VideoOnHover from "./VideoOnHover";

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
      <div className="w-max h-max shadow-2xl outline outline-0 hover:outline-2">
        <VideoOnHover videoSrc="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4">
          <ImgLoad
            className="rounded-md"
            placeholder="Holder"
            src={video.thumbnailUrl}
            // width={"300"}
            width="450"
            height="300"
            alt=""
          />
        </VideoOnHover>
      </div>
      <div>Video id: {video && video.id} </div>
    </>
  );
};

export default VideoComp;
