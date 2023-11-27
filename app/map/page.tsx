"use client";

import MapContainer from "./map/container";
import SearchHeader from "./search-header";

export default function Map() {
  return (
    <div className="w-full h-full flex flex-col">
      <SearchHeader />
      <div className="w-full h-full bg-green-400">
        <MapContainer />
      </div>
    </div>
  );
}
