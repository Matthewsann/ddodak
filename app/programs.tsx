import { Suspense } from "react";
import ProgramList from "@/app/components/program/list";
import ProgramListLoading from "./components/program/list/loading";

export default function Programs() {
  return (
    <section className="flex flex-col">
      <div className="px-7 font-medium text-sm">추천 프로그램</div>
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
