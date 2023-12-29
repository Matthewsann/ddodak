"use client";

import { FilterType, KeywordType } from "@/types/counselor";
import FilterItem from "../components/filter/item";
import FilterTitle from "@/components/filter/title";
import RangeInput from "@/components/input/range";
import { CONTACT, GENDERS, RELIGIONS } from "@/constants/filter";
import { useState } from "react";
import Icons from "@/components/icons";
import { ContactFilter, GenderFilter, PriceFilter } from "./filters";

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
    <div className="absolute top-0 inset-x-0 min-h-[100dvh] bg-background z-[1000]">
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
        </li>

        <li>
          <FilterTitle title="연령" duplicate />
          <div className="flex gap-2 mt-4">
            {RELIGIONS.map((f, key) => (
              <FilterItem
                key={key}
                checked={pFilter.religion.includes(f.key)}
                toggle={() => {
                  setPFilter(() => ({
                    ...pFilter,
                    religion: pFilter.religion.includes(f.key)
                      ? pFilter.religion.filter((type) => type !== f.key)
                      : [...pFilter.religion, f.key],
                  }));
                }}
              >
                {f.value}
              </FilterItem>
            ))}
          </div>
        </li>

        <li>
          <FilterTitle title="특징" duplicate />
          <div className="flex gap-2 flex-wrap mt-4">
            {keywords.map((pFilter, key) => (
              <FilterItem
                checked={selectedKeywords.includes(pFilter.id)}
                key={key}
                toggle={() => {
                  selectKeyword((keywords) =>
                    keywords.includes(pFilter.id)
                      ? keywords.filter((id) => id !== pFilter.id)
                      : [...keywords, pFilter.id]
                  );
                }}
              >
                {pFilter.keyword}
              </FilterItem>
            ))}
          </div>
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
