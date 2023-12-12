"use client";

import type { CenterType } from "@/types/center";
import { useState } from "react";
import MapContainer from "./map/container";
import SearchHeader from "../components/search-header";
import SearchFilter from "./search-filter";
import SearchResult from "./search-result";
import { Coordinates } from "@/types/map";

export default function Map() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [centers, setCenters] = useState<CenterType[]>([]);
  const [loc, setLoc] = useState<Coordinates>();

  return (
    <>
      <div className="w-full h-full flex flex-col">
        <div className="shadow z-10">
          <SearchHeader openFilter={() => setIsFilterOpen(true)} />
        </div>
        <div className="w-full h-full bg-green-400">
          <MapContainer setCenters={setCenters} loc={loc} setLoc={setLoc} />
        </div>
        {loc && <SearchResult centers={centers} loc={loc} />}
      </div>
      {isFilterOpen && <SearchFilter close={() => setIsFilterOpen(false)} />}
    </>
  );
}
