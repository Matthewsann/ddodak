"use client";

import type { CenterType } from "@/types/center";
import { useState } from "react";
import MapContainer from "./map/container";
import SearchHeader from "../components/search-header";
import SearchFilter from "./search-filter";
import SearchResult from "./search-result";

export default function Map() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [centers, setCenters] = useState<CenterType[]>([]);

  return (
    <>
      <div className="w-full h-full flex flex-col">
        <div className="shadow z-10">
          <SearchHeader openFilter={() => setIsFilterOpen(true)} />
        </div>
        <div className="w-full h-full bg-green-400">
          <MapContainer setCenters={setCenters} />
        </div>
        <SearchResult centers={centers} />
      </div>
      {isFilterOpen && <SearchFilter close={() => setIsFilterOpen(false)} />}
    </>
  );
}
