"use client";

import Link from "next/link";
import Icons from "./icons";
import { useRouter } from "next/navigation";

export default function SearchHeader({
  openFilter,
  noFilter,
}: {
  openFilter?: () => void;
  noFilter?: boolean;
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
            className="btn btn-ghost btn-circle"
            onClick={() => openFilter && openFilter()}
          >
            <Icons.Filter className="shrink-0" />
          </button>
        </div>
      )}
    </div>
  );
}
