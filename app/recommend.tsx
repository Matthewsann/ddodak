import { Suspense } from "react";
import Icons from "@/app/components/icons";
import CounselorList from "@/app/components/counselor/list";
import CounselorListLoading from "./components/counselor/list/loading";

export default function Recommend() {
  return (
    <section className="flex flex-col">
      <div className="flex justify-between pl-7 pr-3">
        <div className="flex flex-col gap-0.5">
          <div className="font-medium text-sm">나랑 가까운 상담 찾기</div>
          <div className="flex items-center text-xs font-light">
            <Icons.Crosshair />
            서울시 성북구
          </div>
        </div>
        <button className="btn btn-ghost btn-circle">
          <Icons.Map />
        </button>
      </div>
      <div className="mt-2 overflow-x-auto no-scrollbar">
        <div className="px-7 w-max">
          <Suspense fallback={<CounselorListLoading />}>
            <CounselorList />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
