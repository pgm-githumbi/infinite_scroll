import React from "react";
import VideoComp from "./VideoComp";
import { Virtuoso } from "react-virtuoso";
import Container from "../../components/Container";

type Props = {};

const VideoList = (props: Props) => {
  return (
    <>
      <div className="min-h-96 min-w-full bg-slate-800">
        <Virtuoso
          className={"bg-slate-400 min-h-96 min-w-full gap-2"}
          // style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}
          totalCount={50000}
          overscan={50}
          components={{
            List: Container,
          }}
          itemContent={(index) => (
            <div className="">
              <>
                <div>Item {index}</div>
                <VideoComp index={index} />
              </>
            </div>
          )}
        />
      </div>
    </>
  );
};

export default VideoList;
