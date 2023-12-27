"use client";

import type { CenterType } from "@/types/center";
import { useCallback, useEffect, useState } from "react";
import MapContainer from "./map/container";
import SearchHeader from "../components/search-header";
import SearchFilter from "./search-filter";
import SearchResult from "./search-result";
import { Coordinates } from "@/types/map";
import { keywordList } from "@/apis/counselor";
import { KeywordType } from "@/types/counselor";
import { centerMapList } from "@/apis/center";

export default function Map() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [centers, setCenters] = useState<CenterType[]>([]);
  const [loc, setLoc] = useState<Coordinates>();
  const [bound, setBound] = useState<{
    minLongitude: number;
    maxLongitude: number;
    minLatitude: number;
    maxLatitude: number;
  }>({
    minLongitude: 0,
    maxLongitude: 0,
    minLatitude: 0,
    maxLatitude: 0,
  });

  const [keywords, setKeywords] = useState<KeywordType[]>([]);
  const [selectedKeywords, setSelectedKeywords] = useState<number[]>([]);

  const initLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLoc([position.coords.longitude, position.coords.latitude]);
    });
  };

  useEffect(() => {
    initLocation();
  }, []);

  const getFilter = useCallback(async () => {
    const result = await keywordList();
    setKeywords(result);
  }, []);

  useEffect(() => {
    getFilter();
  }, []);

  const updateCenters = useCallback(async () => {
    const centers = await centerMapList({
      ...bound,
      keywords: selectedKeywords,
    });
    setCenters(centers);
  }, [bound, selectedKeywords]);

  useEffect(() => {
    updateCenters();
  }, [updateCenters]);

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
          <SearchHeader
            openFilter={() => setIsFilterOpen(true)}
            filters={keywords}
            selectedKeywords={selectedKeywords}
            selectKeyword={setSelectedKeywords}
          />
        </div>
        <div className="w-full h-full bg-green-400">
          <MapContainer centers={centers} setBound={setBound} loc={loc} />
        </div>
        {loc && (
          <SearchResult centers={centers} loc={loc} renewLoc={renewLoc} />
        )}
      </div>
      {isFilterOpen && (
        <SearchFilter
          close={() => setIsFilterOpen(false)}
          filters={keywords}
          selectedFilters={selectedKeywords}
          selectFilter={setSelectedKeywords}
        />
      )}
    </>
  );
}
