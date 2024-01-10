"use client";

import type { CenterType } from "@/types/center";
import { useCallback, useEffect, useState } from "react";
import MapContainer from "./map/container";
import SearchHeader from "./search-header";
import SearchFilter from "./search-filter";
import SearchResult from "./search-result";
import { Coordinates } from "@/types/map";
import { keywordList } from "@/apis/counselor";
import { FilterType, KeywordType } from "@/types/counselor";
import { centerMapList } from "@/apis/center";
import { throttle } from "lodash";
import { useSearchParams } from "next/navigation";

export default function Map() {
  const searchParams = useSearchParams();
  const [nowMapCenter, setNowMapCenter] = useState<Coordinates>([0, 0]);

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
  const [filter, setFilter] = useState<FilterType>({
    maxLatitude: 0,
    maxLongitude: 0,
    minLatitude: 0,
    minLongitude: 0,

    contactType: [],
    gender: [],
    religion: [],

    minPrice: 0,
    maxPrice: 200000,

    minAge: 20,
    maxAge: 60,
  });

  const initLocation = () => {
    if (searchParams.get("lat") && searchParams.get("lng")) {
      setLoc([
        Number(searchParams.get("lng")),
        Number(searchParams.get("lat")),
      ]);
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        setLoc([position.coords.longitude, position.coords.latitude]);
      });
    }
  };

  useEffect(() => {
    initLocation();
  }, []);

  const getKeywords = useCallback(async () => {
    const result = await keywordList();
    setKeywords(result);
  }, []);

  useEffect(() => {
    getKeywords();
  }, []);

  const updateCenters = useCallback(
    throttle(async () => {
      if (!loc) return;
      const centers = await centerMapList({
        keywords: selectedKeywords,
        ...filter,
        ...bound,
      });
      setCenters(centers);
    }, 1000),
    [bound, selectedKeywords, filter]
  );

  useEffect(() => {
    updateCenters();
  }, [updateCenters]);

  const renewLoc = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLoc([position.coords.longitude, position.coords.latitude]);
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
            filter={filter}
            setFilter={setFilter}
          />
        </div>
        <div className="w-full h-full bg-green-400">
          <MapContainer
            centers={centers}
            setBound={setBound}
            loc={loc}
            setNowMapCenter={setNowMapCenter}
          />
        </div>
        {loc && (
          <SearchResult
            centers={centers}
            loc={loc}
            renewLoc={renewLoc}
            nowMapCenter={nowMapCenter}
          />
        )}
      </div>
      {isFilterOpen && (
        <SearchFilter
          close={() => setIsFilterOpen(false)}
          filter={filter}
          setFilter={setFilter}
          keywords={keywords}
          selectedKeywords={selectedKeywords}
          selectKeyword={setSelectedKeywords}
        />
      )}
    </>
  );
}
