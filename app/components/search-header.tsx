"use client";

import Link from "next/link";
import Icons from "./icons";
import { useRouter } from "next/navigation";
import { KeywordType } from "@/types/counselor";
import { filter } from "lodash";
import cc from "classcat";

export default function SearchHeader({
  openFilter,
  noFilter,
  filters,
  selectedKeywords,
  selectKeyword,
}: {
  openFilter?: () => void;
  noFilter?: boolean;
  filters: KeywordType[];
  selectedKeywords: number[];
  selectKeyword: React.Dispatch<React.SetStateAction<number[]>>;
}) {
  const router = useRouter();

  return (
    <div className="w-full flex flex-col bg-background px-4 py-2">
      <div className="flex items-center justify-between gap-2">
        <button
          className="btn btn-ghost btn-circle"
          onClick={() => router.back()}
        >
          <Icons.GoBack className="shrink-0" />
        </button>
        <input
          className="h-7 px-3 rounded-full w-full bg-footer shadow-float font-medium text-[11px] placeholder:text-black/40"
          placeholder="성북구 안암동"
          autoFocus={noFilter}
        />
        <Link className="btn btn-ghost btn-circle" href={"/"}>
          <Icons.Search className="shrink-0 stroke-black" />
        </Link>
      </div>
      {!noFilter && (
        <div className="flex items-center">
          <button
            className="btn btn-ghost btn-circle shrink-0"
            onClick={() => openFilter && openFilter()}
          >
            <Icons.Filter className="shrink-0" />
          </button>

          <div className="w-full overflow-x-auto flex gap-2 flex-nowrap no-scrollbar">
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={cc([
                  "whitespace-nowrap font-medium text-[11px] px-2 border-primary rounded-full border h-6 flex items-center",
                  selectedKeywords.includes(filter.id) &&
                    "bg-primary text-white",
                ])}
                onClick={() => {
                  selectKeyword((filters) =>
                    filters.includes(filter.id)
                      ? filters.filter((f) => f !== filter.id)
                      : [...filters, filter.id]
                  );
                }}
              >
                {filter.keyword}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
