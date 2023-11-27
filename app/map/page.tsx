"use client";

import { useState } from "react";
import MapContainer from "./map/container";
import SearchHeader from "./search-header";
import SearchFilter from "./search-filter";

export default function Map() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <>
      <div className="w-full h-full flex flex-col">
        <SearchHeader openFilter={() => setIsFilterOpen(true)} />
        <div className="w-full h-full bg-green-400">
          <MapContainer />
        </div>
      </div>
      {isFilterOpen && <SearchFilter close={() => setIsFilterOpen(false)} />}
    </>
  );
}
