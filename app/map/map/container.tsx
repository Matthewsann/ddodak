"use client";

import { Coordinates } from "@/types/map";
import Map from ".";
import type { CenterType } from "@/types/center";

export default function MapContainer({
  centers,
  setBound,
  loc,
  setNowMapCenter,
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
  setNowMapCenter: React.Dispatch<React.SetStateAction<Coordinates>>;
}) {
  return (
    <div className="relative w-full h-full">
      {loc && (
        <Map
          centers={centers}
          loc={loc}
          setBound={setBound}
          setNowMapCenter={setNowMapCenter}
        />
      )}
    </div>
  );
}
