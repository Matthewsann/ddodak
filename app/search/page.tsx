"use client";

import Icons from "@/components/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Search() {
  const router = useRouter();

  return (
    <div className="w-full flex flex-col h-[100dvh] px-4 py-2">
      <div className="flex items-center justify-between gap-2 mb-2">
        <button
          className="btn btn-ghost btn-circle"
          onClick={() => router.back()}
        >
          <Icons.GoBack className="shrink-0" />
        </button>
        <input
          className="h-7 px-3 rounded-full w-full bg-footer shadow-float font-medium text-[11px] placeholder:text-black/40"
          placeholder="성북구 안암동"
          autoFocus
        />
        <Link className="btn btn-ghost btn-circle" href={"/"}>
          <Icons.Search className="shrink-0 stroke-black" />
        </Link>
      </div>
      <div className="text-[11px] font-medium text-black/40 px-7 mt-2">
        최근 검색어
      </div>
      <div className="flex justify-center gap-4 font-medium text-black/70 text-[11px]">
        <div>안암역</div>
        <div>보문</div>
        <div>수유동</div>
        <div>qhans</div>
      </div>
      <div className="w-full h-full text-center flex items-center justify-center font-medium text-sm">
        센터명, 지하철역, 지역명을
        <br />
        검색해 보세요.
      </div>
    </div>
  );
}
