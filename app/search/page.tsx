"use client";

import { centerSearchList } from "@/apis/center";
import Icons from "@/components/icons";
import SearchList from "@/components/search/list";
import { useSearchStore } from "@/store/search-store";
import { CenterType } from "@/types/center";
import { Coordinates } from "@/types/map";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function Search() {
  const router = useRouter();
  const { searchList, addr } = useSearchStore();
  const [search, setSearch] = useState("");
  const [isSearched, setIsSearched] = useState(false);
  const [loc, setLoc] = useState<Coordinates>();
  const [centers, setCenters] = useState<CenterType[]>([]);

  const handleSearch = useCallback(async () => {
    try {
      const res = await centerSearchList({ text: search });
      setCenters(res);
      setIsSearched(true);
    } catch (e) {}
  }, [search]);

  const initLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLoc([position.coords.longitude, position.coords.latitude]);
    });
  };

  useEffect(() => {
    initLocation();
  }, []);

  return (
    <div className="w-full flex flex-col h-[100dvh] px-4 py-2">
      <div className="w-full flex items-center justify-between gap-2 mb-2">
        <button
          className="btn btn-ghost btn-circle shrink-0"
          onClick={() => router.back()}
        >
          <Icons.GoBack className="shrink-0" />
        </button>
        <div className="relative w-full flex items-center justify-end focus-within:[svg:block]">
          <input
            className="h-7 px-3 rounded-full w-full bg-footer shadow-float font-medium text-[11px] placeholder:text-black/40"
            placeholder={addr}
            autoFocus
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="absolute right-2" onClick={() => setSearch("")}>
            <Icons.Close />
          </button>
        </div>
        <button
          className="btn btn-ghost btn-circle shrink-0"
          onClick={() => handleSearch()}
        >
          <Icons.Search className="stroke-black" />
        </button>
      </div>
      <div className="text-[11px] font-medium text-black/40 px-7 mt-2">
        최근 검색어
      </div>
      <div className="flex justify-center gap-4 font-medium text-black/70 text-[11px]">
        {searchList.map((search, key) => (
          <div key={key}>{search}</div>
        ))}
      </div>
      {isSearched && loc ? (
        <SearchList centers={centers} loc={loc} />
      ) : (
        <div className="w-full h-full text-center flex items-center justify-center font-medium text-sm">
          센터명, 지하철역, 지역명을
          <br />
          검색해 보세요.
        </div>
      )}
    </div>
  );
}
