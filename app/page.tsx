import { Suspense } from "react";
import Icons from "@/app/components/icons";
import CounselorList from "@/app/components/icons/counselor/list";
import CounselorListLoading from "./components/icons/counselor/list/loading";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full h-80 relative">
        <img
          src="/asset/main/background.png"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-end px-7 pb-12 text-white gap-1">
          <div className="font-bold text-lg">
            개인 맞춤 상담사를 추천 받아보세요!
          </div>
          <div className="font-medium text-sm">
            설문을 통해 와라랄라라랄라ㅏ 짧은 소개글
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center bg-background">
        <button className="-translate-y-1/2 shadow-none btn btn-primary min-h-0 h-auto text-base py-4 px-[58px] font-extrabold rounded-full text-white">
          상담사 추천 받기
        </button>
      </div>
      <div className="w-full h-full bg-background">
        <section className="flex flex-col">
          <div className="flex flex-col gap-0.5 px-7">
            <div className="font-medium text-sm">나랑 가까운 상담 찾기</div>
            <div className="flex items-center text-xs font-light">
              <Icons.Crosshair />
              서울시 성북구
            </div>
          </div>
          <div className="mt-2 overflow-x-auto no-scrollbar">
            <div className="px-7 w-max">
              <Suspense fallback={<CounselorListLoading />}>
                <CounselorList />
              </Suspense>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
