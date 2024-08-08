import React, { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

const ScrollToTop = ({ children }: Props) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [children]);
  return <>{children}</>;
};

export default ScrollToTop;
