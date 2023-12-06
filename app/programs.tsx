import { Suspense } from "react";
import ProgramList from "@/components/program/list";
import ProgramListLoading from "./components/program/list/loading";

export default function Programs() {
  return (
    <section className="flex flex-col">
      <div className="px-7 font-bold text-sm flex items-center justify-between">
        추천 프로그램
        <button className="btn btn-ghost btn-xs font-light text-[11px]">
          더보기
        </button>
      </div>
      <div className="mt-2 overflow-x-auto no-scrollbar">
        <div className="px-7 w-max">
          <Suspense fallback={<ProgramListLoading />}>
            <ProgramList />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
