import { programRecommendList } from "@/apis/program";
import Program from "..";
import { redirect } from "next/navigation";

const fetchData = async () => {
  try {
    const res = await programRecommendList();
    return res;
  } catch (e) {
    redirect("/");
  }
};

export default async function ProgramList() {
  const data = await fetchData();
  return (
    <div className="flex gap-4">
      {data.map((item, i) => (
        <Program key={i} program={item} />
      ))}
    </div>
  );
}
