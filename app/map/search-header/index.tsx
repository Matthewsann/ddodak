"use client";

import Link from "next/link";
import Icons from "../../components/icons";
import { useRouter } from "next/navigation";
import { FilterType, KeywordType } from "@/types/counselor";
import { useState } from "react";
import {
  AgeFilter,
  ContactFilter,
  GenderFilter,
  PriceFilter,
  ReligionFilter,
} from "@/map/filters";
import IndividualList from "./individual-list";

export default function SearchHeader({
  openFilter,
  filter,
  setFilter,
}: {
  openFilter: () => void;
  filter: FilterType;
  setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
}) {
  const router = useRouter();
  const [openIndividually, setOpenIndividually] = useState<
    "contact" | "gender" | "price" | "age" | "religion" | ""
  >("");

  return (
    <div className="w-full flex flex-col bg-background px-4 py-2">
      <div className="flex items-center justify-between gap-2 mb-2">
        <button
          className="btn btn-ghost btn-circle"
          onClick={() => router.back()}
        >
          <Icons.GoBack className="shrink-0" />
        </button>
        <div className="relative w-full flex items-center justify-end">
          <input
            className="h-7 px-3 rounded-full w-full bg-footer shadow-float font-medium text-[11px] placeholder:text-black/40"
            placeholder="성북구 안암동"
            onFocus={() => router.push("/search")}
          />
          <Icons.Search className="shrink-0 stroke-black absolute right-2" />
        </div>
        <Link className="btn btn-ghost btn-circle" href={"/"}>
          <Icons.Home className="shrink-0 stroke-black" />
        </Link>
      </div>
      <div className="flex items-center">
        <button
          className="btn btn-ghost btn-circle shrink-0"
          onClick={() => openFilter && openFilter()}
        >
          <Icons.Filter className="shrink-0" />
        </button>

        <IndividualList
          filter={filter}
          setOpenIndividually={setOpenIndividually}
        />
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
            {openIndividually === "religion" && (
              <ReligionFilter filter={filter} setFilter={setFilter!} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
