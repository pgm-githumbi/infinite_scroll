import classNames from "classnames";
import React from "react";

type Props = {
  classes?: classNames.ArgumentArray;
  children?: React.ReactNode;
};
const Container: React.FC<Props> = ({
  classes = undefined,
  children,
  ...props
}) => {
  console.log("extra container props", props);
  return (
    <div
      className={classNames(
        "grid grid-cols-4 bg-lime-500 min-h-full min-w-full",
        classes
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
