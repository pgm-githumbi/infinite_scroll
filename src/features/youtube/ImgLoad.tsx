import React, { useState } from "react";
import AspectRatio from "react-aspect-ratio/dist/react-15.6";

type ExtraProps = {
  srcWhenLoading?: string;
};

const ImgLoad = ({
  srcWhenLoading = process.env.PUBLIC_URL + "/loading1.png",
  ...rest
}:
  | React.DetailedHTMLProps<
      React.ImgHTMLAttributes<HTMLImageElement>,
      HTMLImageElement
    > &
      ExtraProps) => {
  const [isMainLoading, setMainLoading] = useState(true);
  const { style, alt, src, ...imgProps } = rest;
  let displayStyleMainImg = isMainLoading
    ? { ...style, display: "none" }
    : { ...style };
  let displayStyleSecondaryImg = isMainLoading
    ? { ...style }
    : { ...style, display: "none" };
  return (
    <>
      {/* Loading Img */}
      <AspectRatio ratio="0.5">
        <img
          style={displayStyleSecondaryImg}
          alt={alt}
          src={srcWhenLoading}
          {...imgProps}
        />
      </AspectRatio>
      {/* Main Img */}
      <img
        onLoad={() => setMainLoading(false)}
        style={displayStyleMainImg}
        alt={alt}
        src={src}
        {...imgProps}
      />
    </>
  );
};

export default ImgLoad;
