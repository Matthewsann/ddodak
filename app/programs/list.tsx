import { programList } from "@/apis/program";
import ProgramItem from "./item";

const fetchData = async () => {
  const res = await programList();
  return res;
};

export default async function ProgramList() {
  const data = await fetchData();

  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-6">
      {data.map((item, i) => (
        <ProgramItem key={i} program={item} />
      ))}
    </div>
  );
}
