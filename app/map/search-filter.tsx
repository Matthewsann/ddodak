import { FilterType, KeywordType } from "@/types/counselor";
import FilterItem from "../components/filter/item";
import Icons from "../components/icons";
import { useMemo } from "react";
import { ContactCode } from "@/types/codes";
import FilterTitle from "@/components/filter/title";
import RangeInput from "@/components/input/range";

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
            {(
              [
                {
                  key: "OFFLINE",
                  value: "대면상담",
                },
                {
                  key: "ONLINE",
                  value: "화상상담",
                },
                {
                  key: "PHONE",
                  value: "전화상담",
                },
              ] as {
                key: ContactCode;
                value: string;
              }[]
            ).map((f, key) => (
              <FilterItem
                key={key}
                checked={filter.contactType.includes(f.key)}
                toggle={() => {
                  setFilter(() => ({
                    ...filter,
                    contactType: filter.contactType.includes(f.key)
                      ? filter.contactType.filter((type) => type !== f.key)
                      : [...filter.contactType, f.key],
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
            {filter.minPrice / 10000} - {filter.maxPrice / 10000}만 원
          </div>
          <RangeInput
            className="mt-4"
            range={[0, 200000]}
            min={filter.minPrice}
            max={filter.maxPrice}
            setMin={(min) =>
              setFilter((filter) => ({ ...filter, minPrice: min }))
            }
            setMax={(max) =>
              setFilter((filter) => ({ ...filter, maxPrice: max }))
            }
            step={10000}
          />
        </li>
      </ul>
      <div className="flex gap-2 flex-wrap px-6">
        {keywords.map((filter, key) => (
          <FilterItem
            checked={selectedKeywords.includes(filter.id)}
            key={key}
            toggle={() => {
              selectKeyword((keywords) =>
                keywords.includes(filter.id)
                  ? keywords.filter((id) => id !== filter.id)
                  : [...keywords, filter.id]
              );
            }}
          >
            {filter.keyword}
          </FilterItem>
        ))}
      </div>
    </div>
  );
}
