"use client";

import { FilterType, KeywordType } from "@/types/counselor";
import FilterItem from "../components/filter/item";
import FilterTitle from "@/components/filter/title";
import RangeInput from "@/components/input/range";
import { CONTACT, GENDERS, RELIGIONS } from "@/constants/filter";
import { useState } from "react";
import Icons from "@/components/icons";

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
          <FilterTitle title="상담 방식" duplicate />
          <div className="flex gap-2 mt-4">
            {CONTACT.map((f, key) => (
              <FilterItem
                key={key}
                checked={pFilter.contactType.includes(f.key)}
                toggle={() => {
                  setPFilter((pFilter) => ({
                    ...pFilter,
                    contactType: pFilter.contactType.includes(f.key)
                      ? pFilter.contactType.filter((type) => type !== f.key)
                      : [...pFilter.contactType, f.key],
                  }));
                }}
              >
                {f.value}
              </FilterItem>
            ))}
          </div>
        </li>

        <li>
          <FilterTitle title="상담 가격" />
          <div className="w-full text-right text-primary text-[11px] font-medium">
            {pFilter.minPrice / 10000} - {pFilter.maxPrice / 10000}만 원
          </div>
          <RangeInput
            className="mt-4"
            range={[0, 200000]}
            min={pFilter.minPrice}
            max={pFilter.maxPrice}
            minText={"최소"}
            maxText={"최대"}
            minValueText={`${pFilter.minPrice / 10000}만 원`}
            maxValueText={`${pFilter.maxPrice / 10000}만 원`}
            setMin={(min) =>
              setPFilter((pFilter) => ({ ...pFilter, minPrice: min }))
            }
            setMax={(max) =>
              setPFilter((pFilter) => ({ ...pFilter, maxPrice: max }))
            }
            step={10000}
          />
        </li>

        <li>
          <FilterTitle title="성별" duplicate />
          <div className="flex gap-2 mt-4">
            {GENDERS.map((f, key) => (
              <FilterItem
                key={key}
                checked={pFilter.gender.includes(f.key)}
                toggle={() => {
                  setPFilter(() => ({
                    ...pFilter,
                    gender: pFilter.gender.includes(f.key)
                      ? pFilter.gender.filter((type) => type !== f.key)
                      : [...pFilter.gender, f.key],
                  }));
                }}
              >
                {f.value}
              </FilterItem>
            ))}
          </div>
        </li>

        <li>
          <FilterTitle title="연령" />
          <div className="w-full text-right text-primary text-[11px] font-medium">
            {pFilter.minAge} -{" "}
            {pFilter.maxAge < 60 ? `${pFilter.maxAge}세` : "60대 이상"}
          </div>
          <RangeInput
            className="mt-4"
            range={[20, 60]}
            min={pFilter.minAge}
            max={pFilter.maxAge}
            minText={"20대"}
            maxText={"60대 이상"}
            minValueText={`${pFilter.minAge}세`}
            maxValueText={`${pFilter.maxAge}세`}
            setMin={(min) =>
              setPFilter((pFilter) => ({ ...pFilter, minAge: min }))
            }
            setMax={(max) =>
              setPFilter((pFilter) => ({ ...pFilter, maxAge: max }))
            }
            step={1}
          />
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
