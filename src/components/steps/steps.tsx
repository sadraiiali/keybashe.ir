import clsx from "clsx";
import { useTranslation } from "next-i18next";
import React from "react";

export interface StepsProps {
  current: number;
  total: number;
  className?: string;
}

const Steps: React.VoidFunctionComponent<StepsProps> = ({
  current,
  total,
  className,
}) => {
  const { t } = useTranslation("app");

  return (
    <div className={clsx("inline-flex items-center", className)}>
      <div className="text-sm font-medium tracking-tight">
        {t("stepSummary", {
          current: current + 1,
          total,
        })}
      </div>
      <div className="flex items-center ms-2">
        {[...Array(total)].map((_, i) => {
          return (
            <span
              key={i}
              className={clsx("h-2 w-2  rounded-full transition-all ms-3", {
                "bg-primary-400": i <= current,
                "bg-gray-300": i > current,
                "animate-pulse ring-4 ring-primary-200": i === current,
              })}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Steps;
