"use client";

import Link from "next/link";
import Icons from "./icons";
import { useRouter } from "next/navigation";
import { FilterType, KeywordType } from "@/types/counselor";
import { useState } from "react";
import {
  AgeFilter,
  ContactFilter,
  GenderFilter,
  PriceFilter,
} from "@/map/filters";
import classcat from "classcat";
import { CONTACT } from "@/constants/filter";

export default function SearchHeader({
  openFilter,
  filter,
  setFilter,
}: {
  openFilter?: () => void;
  filter?: FilterType;
  setFilter?: React.Dispatch<React.SetStateAction<FilterType>>;
}) {
  const router = useRouter();
  const [openIndividually, setOpenIndividually] = useState<
    "contact" | "gender" | "price" | "age" | ""
  >("");

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
          autoFocus={!!filter}
        />
        <Link className="btn btn-ghost btn-circle" href={"/"}>
          <Icons.Search className="shrink-0 stroke-black" />
        </Link>
      </div>
      {filter && (
        <>
          <div className="flex items-center">
            <button
              className="btn btn-ghost btn-circle shrink-0"
              onClick={() => openFilter && openFilter()}
            >
              <Icons.Filter className="shrink-0" />
            </button>

            <div className="w-full overflow-x-auto flex gap-2 flex-nowrap no-scrollbar">
              <button
                className={classcat([
                  filter.contactType.length === 0
                    ? "item-button"
                    : "item-button-selected",
                ])}
                onClick={() => setOpenIndividually("contact")}
              >
                {filter.contactType.length
                  ? filter.contactType.length === 1
                    ? CONTACT.find((c) => c.key === filter.contactType[0])
                        ?.value
                    : `${
                        CONTACT.find((c) => c.key === filter.contactType[0])
                          ?.value
                      } 외 ${filter.contactType.length - 1}개`
                  : "상담 방식"}
              </button>
            </div>
          </div>
          {openIndividually && (
            <div className="px-2">
              <div className="w-full border-t-primary border-t py-5 mt-5">
                {openIndividually === "contact" && (
                  <ContactFilter filter={filter} setFilter={setFilter!} />
                )}
                {openIndividually === "price" && (
                  <PriceFilter filter={filter} setFilter={setFilter!} />
                )}
                {openIndividually === "gender" && (
                  <GenderFilter filter={filter} setFilter={setFilter!} />
                )}
                {openIndividually === "age" && (
                  <AgeFilter filter={filter} setFilter={setFilter!} />
                )}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
