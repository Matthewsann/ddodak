import Header from "@/components/header";
import { Nav } from "@/navbar";
import ProgramDetail from "./detail";
import { Suspense } from "react";
import ProgramDetailLoading from "./loading";

export default async function Programs({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  return (
    <>
      <Header title="프로그램" />
      <Suspense fallback={<ProgramDetailLoading />}>
        <ProgramDetail id={Number(id)} />
      </Suspense>
      <Nav selected="programs" />
    </>
  );
}
