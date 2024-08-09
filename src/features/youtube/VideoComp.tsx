import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchVideos, selectVideoById } from "./VideosSlice";
import ImgLoad from "./ImgLoad";
import VideoOnHover from "./VideoOnHover";
import { useClickToWatch } from "./Watch";
import { Avatar } from "react-lorem-ipsum";

type Props = {
  index: number;
  width?: number;
  height?: number;
};
const VideoComp = ({ index: id, width, height }: Props) => {
  const dispatch = useAppDispatch();

  const video = useAppSelector((state) => selectVideoById(state, id));
  const { onClick } = useClickToWatch(id);
  if (!video) {
    dispatch(fetchVideos(id));
    return <div>Video {id} not yet fetched</div>;
  }
  return (
    <>
      <div
        className="w-max h-max shadow-2xl outline outline-0 hover:outline-2"
        onClick={onClick}
      >
        <VideoOnHover videoSrc={video.url} width={width} height={height}>
          <ImgLoad
            className="rounded-md"
            placeholder="Holder"
            src={video.thumbnailUrl}
            // width={"300"}
            width={width?.toString() || "414"}
            height={height?.toString() || "276"}
            alt=""
          />
        </VideoOnHover>
      </div>
      <div className="flex flex-row mt-2">
        <Avatar
          className="flex-none rounded-full ml-2 mr-2"
          style={{
            width: "35px",
            height: "35px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
        {/* Video id: {video && video.id}{" "} */}
        {video.title}
      </div>
    </>
  );
};

export default VideoComp;
