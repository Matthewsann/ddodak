"use client";

import type { CenterType } from "@/types/center";
import { useEffect, useState } from "react";
import MapContainer from "./map/container";
import SearchHeader from "../components/search-header";
import SearchFilter from "./search-filter";
import SearchResult from "./search-result";
import { Coordinates } from "@/types/map";

export default function Map() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [centers, setCenters] = useState<CenterType[]>([]);
  const [loc, setLoc] = useState<Coordinates>();

  const initLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLoc([position.coords.longitude, position.coords.latitude]);
    });
  };

  useEffect(() => {
    initLocation();
  }, []);

  const renewLoc = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLoc([pos.coords.longitude, pos.coords.latitude]);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  return (
    <>
      <div className="w-full h-full flex flex-col">
        <div className="shadow z-10">
          <SearchHeader openFilter={() => setIsFilterOpen(true)} />
        </div>
        <div className="w-full h-full bg-green-400">
          <MapContainer setCenters={setCenters} loc={loc} />
        </div>
        {loc && (
          <SearchResult centers={centers} loc={loc} renewLoc={renewLoc} />
        )}
      </div>
      {isFilterOpen && <SearchFilter close={() => setIsFilterOpen(false)} />}
    </>
  );
}
