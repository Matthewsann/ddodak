import Header from "@/components/header";
import ProgramList from "./list";
import ProgramTags from "./tags";
import { Nav } from "@/navbar";
import { Suspense } from "react";
import ProgramListLoading from "./loading";

export default function Programs() {
  return (
    <>
      <Header title="프로그램" />
      <ProgramTags />
      <div className="px-6 pb-24">
        <div className="pb-4 font-light text-xs">
          마감임박순 프로그램입니다.
        </div>
        <Suspense fallback={<ProgramListLoading />}>
          <ProgramList />
        </Suspense>
      </div>
      <Nav selected="programs" />
    </>
  );
}
