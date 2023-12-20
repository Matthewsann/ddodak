import { programRecommendList } from "@/apis/program";
import Program from "..";

const fetchData = async () => {
  const res = await programRecommendList();
  return res;
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
