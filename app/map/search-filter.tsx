"use client";

import { FilterType, KeywordType } from "@/types/counselor";
import FilterItem from "../components/filter/item";
import FilterTitle from "@/components/filter/title";
import RangeInput from "@/components/input/range";
import { CONTACT, GENDERS, RELIGIONS } from "@/constants/filter";
import { useState } from "react";
import Icons from "@/components/icons";
import {
  AgeFilter,
  ContactFilter,
  GenderFilter,
  KeywordFilter,
  PriceFilter,
  ReligionFilter,
} from "./filters";

export default function SearchFilter({
  close,
  filter,
  setFilter,
  keywords,
  selectedKeywords,
  selectKeyword,
}: {
  close: () => void;
  filter: FilterType;
  setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
  keywords: KeywordType[];
  selectedKeywords: number[];
  selectKeyword: React.Dispatch<React.SetStateAction<number[]>>;
}) {
  const [pFilter, setPFilter] = useState<FilterType>(filter);

  return (
    <div className="absolute top-0 inset-x-0 h-[100dvh] bg-background z-[1000] overflow-y-auto no-scrollbar">
      <header className="px-4 py-2 grid grid-cols-[48px_1fr_48px]">
        <button className="btn btn-ghost btn-circle" onClick={() => close()}>
          <Icons.GoBack className="shrink-0" />
        </button>
        <div className="flex items-center justify-center font-semibold">
          필터 목록
        </div>
      </header>
      <hr className="border-primary mx-6 mb-5" />
      <ul className="flex flex-col px-6 gap-12">
        <li>
          <ContactFilter filter={pFilter} setFilter={setPFilter} />
        </li>
        <li>
          <PriceFilter filter={pFilter} setFilter={setPFilter} />
        </li>
        <li>
          <GenderFilter filter={pFilter} setFilter={setPFilter} />
        </li>
        <li>
          <AgeFilter filter={pFilter} setFilter={setPFilter} />
        </li>

        <li>
          <ReligionFilter filter={pFilter} setFilter={setPFilter} />
        </li>

        <li>
          <KeywordFilter
            selectedKeywords={selectedKeywords}
            keywords={keywords}
            selectKeyword={selectKeyword}
          />
        </li>
      </ul>

      <div className="py-9 px-12">
        <button
          className="btn btn-primary btn-outline w-full !rounded-full btn-lg !text-black !border-primary"
          onClick={() => {
            setFilter(pFilter);
            close();
          }}
        >
          적용하기
        </button>
      </div>
    </div>
  );
}
