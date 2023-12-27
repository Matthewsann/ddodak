"use client";

import { useEffect, useState } from "react";
import { Coordinates } from "@/types/map";
import Map from ".";
import Icons from "@/components/icons";
import type { CenterType } from "@/types/center";

export default function MapContainer({
  centers,
  setBound,
  loc,
}: {
  centers: CenterType[];
  setBound: React.Dispatch<
    React.SetStateAction<{
      minLatitude: number;
      maxLatitude: number;
      minLongitude: number;
      maxLongitude: number;
    }>
  >;
  loc: Coordinates | undefined;
}) {
  return (
    <div className="relative w-full h-full">
      {loc && <Map centers={centers} loc={loc} setBound={setBound} />}
    </div>
  );
}
