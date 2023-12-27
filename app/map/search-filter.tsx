import { KeywordType } from "@/types/counselor";
import FilterItem from "../components/filter/item";
import Icons from "../components/icons";
import { useMemo } from "react";

export default function SearchFilter({
  close,
  filters,
  selectedFilters,
  selectFilter,
}: {
  close: () => void;
  filters: KeywordType[];
  selectedFilters: number[];
  selectFilter: React.Dispatch<React.SetStateAction<number[]>>;
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
      <main className="flex gap-2 flex-wrap px-6">
        {filters.map((filter, key) => (
          <FilterItem
            checked={selectedFilters.includes(filter.id)}
            key={key}
            toggle={() => {
              selectFilter((filters) =>
                filters.includes(filter.id)
                  ? filters.filter((id) => id !== filter.id)
                  : [...filters, filter.id]
              );
            }}
          >
            {filter.keyword}
          </FilterItem>
        ))}
      </main>
    </div>
  );
}
