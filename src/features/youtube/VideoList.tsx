import { forwardRef } from "react";
import VideoComp from "./VideoComp";
import { VirtuosoGrid } from "react-virtuoso";
import Container from "../../components/Container";

type Props = {};

const ListContainer = forwardRef(Container);
const VideoList = (props: Props) => {
  // const video = useMemo(
  //   () => (index: number) => <VideoComp index={index} />,
  //   []
  // );
  return (
    <>
      <div className="min-h-dvh min-w-full py-4">
        <VirtuosoGrid
          className={"bg-slate-400 min-h-dvh min-w-1/2 gap-4"}
          totalCount={500}
          overscan={100}
          // increaseViewportBy={{ bottom: 200, top: 0 }}
          useWindowScroll={true}
          components={{
            List: ListContainer,
          }}
          itemContent={(index) => <VideoComp index={index} />}
          // itemContent={(index) => (
          //   <div className="">
          //     <>
          //       <div>Item {index}</div>
          //       {/* <VideoComp index={index} /> */}
          //     </>
          //   </div>
          // )}
          listClassName="flex flex-row flex-wrap justify-evenly gap-4"
          itemClassName="md:basis-1/5 basis-1/3 lg:basis-1/6"
        />
      </div>
    </>
  );
};

export default VideoList;
