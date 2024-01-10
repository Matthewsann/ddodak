"use client";

import { CenterType } from "@/types/center";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export default function Card({
  center,
  distance,
  loc,
  nowMapCenter,
}: {
  center: CenterType;
  distance: number;
  loc: [number, number];
  nowMapCenter: [number, number];
}) {
  const router = useRouter();

  const createQuery = useCallback(() => {
    if (!nowMapCenter) return "";
    const params = new URLSearchParams();
    params.set("lat", nowMapCenter[1].toString());
    params.set("lng", nowMapCenter[0].toString());
    return params.toString();
  }, [nowMapCenter]);

  return (
    <button
      className="flex items-center gap-2 mb-4 text-left w-full"
      onClick={() => {
        router.push(`/center/${center.id}?${createQuery()}`);
      }}
    >
      <div className="w-24 h-24 rounded bg-black overflow-hidden">
        <img src={center.profileUrl} className="w-full h-full object-cover" />
      </div>
      <div>
        <div className="text-sm font-medium">{center.name}</div>
        <div className="font-light text-[11px]">
          <span className="font-medium">
            {distance.toLocaleString()}
            km
          </span>{" "}
          | {center.shortAddress}
        </div>
        <div className="flex gap-2 text-xs mt-0.5">
          <div className="font-medium">영업중</div>
          <div className="font-light">19:00 영업 종료</div>
        </div>

        <div className="mt-2 text-[13px]">
          대표 가격 : {center.price.toLocaleString()}원
        </div>
        <div className="text-[11px] mt-0.5">후기 99+</div>
      </div>
    </button>
  );
}
