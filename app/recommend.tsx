import { Suspense } from "react";
import Icons from "@/components/icons";
import CounselorList from "@//components/counselor/list";
import CounselorListLoading from "./components/counselor/list/loading";

export default function Recommend() {
  return (
    <section className="flex flex-col">
      <div className="flex justify-between pl-7 pr-3">
        <div className="flex flex-col gap-0.5">
          <div className="font-bold text-sm">내 주변 상담 센터</div>
          <div className="flex items-center text-xs font-light gap-2">
            <Icons.GPS />
            서울시 성북구
          </div>
        </div>
        <button className="btn btn-ghost stroke-black">
          <div className="font-light text-[11px]">지도로 보기</div>
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
