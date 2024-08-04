import classNames from "classnames";
import React, { LegacyRef } from "react";

type Props = {
  classes?: classNames.ArgumentArray;
  children?: React.ReactNode;
};
const Container = (
  { classes = undefined, children, ...props }: Props,
  ref: LegacyRef<HTMLDivElement> | undefined
) => {
  return (
    <div
      className={classNames(
        "bg-lime-500 min-h-max min-w-max gap-4 py-4 m-3",
        classes || ""
      )}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
