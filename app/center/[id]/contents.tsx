"use client";

import cc from "classcat";
import { useState } from "react";
import CenterInfo from "./info";
import { CenterDetailType, CenterType } from "@/types/center";

const TABS = [
  {
    name: "센터정보",
    value: "info",
  },
  {
    name: "서비스 | 가격",
    value: "service",
  },
  {
    name: "상담사",
    value: "counselor",
  } /* 
  {
    name: "리뷰",
    value: "review",
  }, */,
];

export default function Contents({ data }: { data: CenterDetailType }) {
  const [tab, setTab] = useState(TABS[0]);

  return (
    <>
      <div className="w-full grid grid-cols-3 shadow-lg bg-background py-3 text-xs sticky top-16 z-10">
        {TABS.map((t) => (
          <a
            key={t.value}
            onClick={() => setTab(t)}
            className={cc([
              "block text-center",
              tab.value === t.value
                ? "text-primary font-semibold"
                : "text-black/60 font-medium",
            ])}
            href={`#${t.value}`}
          >
            {t.name}
            {t.value === "counselor" && (
              <span className="text-sm font-extrabold">
                {" "}
                {data.counselorList.length}
              </span>
            )}
          </a>
        ))}
      </div>
      <div className="p-6">
        <CenterInfo data={data} />
      </div>
    </>
  );
}
