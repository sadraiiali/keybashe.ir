import clsx from "clsx";
import * as React from "react";

import Spinner from "./icons/spinner.svg";

interface FullPageLoaderProps {
  className?: string;
  children?: React.ReactNode;
}

const FullPageLoader: React.VoidFunctionComponent<FullPageLoaderProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={clsx(" flex h-full items-center justify-center", className)}
    >
      <div className="flex items-center rounded-lg bg-primary-500 px-4 py-3 text-sm text-white shadow-sm">
        <Spinner className="h-5 animate-spin me-3" />
        {children}
      </div>
    </div>
  );
};

export default FullPageLoader;
