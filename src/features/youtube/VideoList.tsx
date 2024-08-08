import { forwardRef } from "react";
import VideoComp from "./VideoComp";
import { VirtuosoGrid } from "react-virtuoso";
import Container from "../../components/Container";

type Props = {
  width?: number;
  height?: number;
};

const ListContainer = forwardRef(Container);
const VideoList = ({ width, height }: Props) => {
  return (
    <>
      <div className="min-h-dvh min-w-full">
        <VirtuosoGrid
          className={"min-h-dvh min-w-1/2 gap-4"}
          totalCount={500}
          overscan={100}
          useWindowScroll={true}
          components={{
            List: ListContainer,
          }}
          itemContent={(index) => (
            <VideoComp index={index} width={width} height={height} />
          )}
          listClassName="flex flex-row flex-wrap justify-evenly gap-4"
          itemClassName="md:basis-1/5 basis-1/3 lg:basis-1/6"
        />
      </div>
    </>
  );
};

export default VideoList;
