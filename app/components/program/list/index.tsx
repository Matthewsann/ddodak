import { programRecommendList } from "@/apis/program";
import Program from "..";

const fetchData = async () => {
  try {
    const res = await programRecommendList();
    return res;
  } catch (e) {
    return null;
  }
};

export default async function ProgramList() {
  const data = await fetchData();
  return (
    <div className="flex gap-4">
      {data ? (
        data.map((item, i) => <Program key={i} program={item} />)
      ) : (
        <div className="text-xs">
          데이터를 불러오는데 실패했습니다. 인터넷 연결을 확인해주세요.
        </div>
      )}
    </div>
  );
}
