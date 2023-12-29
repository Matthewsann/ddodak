import { programDetail, programList } from "@/apis/program";
import { format } from "date-fns";

const fetchData = async (id: number) => {
  const res = await programDetail({ id });
  return res;
};

export default async function ProgramDetail({ id }: { id: number }) {
  const program = await fetchData(id);

  return (
    <div className="flex flex-col px-7 pt-24">
      <img className="w-full h-full" src={program.profileUrl} />
      <div className="font-semibold text-sm mt-6">
        제목:
        {program.name}
      </div>
      <div className="font-light text-xs flex flex-col gap-1 mt-1">
        <div>
          주관:
          {program.programMaster}
        </div>
        <div>
          장소:
          {program.address}
        </div>
        <div>
          기간:
          {format(new Date(program.startDate), "yyyy. MM. dd")} -{" "}
          {format(
            new Date(program.endDate),
            `${
              program.startDate.slice(0, 4) !== program.endDate.slice(0, 4)
                ? "yyyy. "
                : ""
            } MM. dd`
          )}
        </div>
        <div>일시: {program.actionDate}</div>
        <div className="font-semibold text-xs mt-2">
          가격: {program.price}원 | 총 {program.actionCount}회 기준
        </div>
      </div>

      <div className="w-full px-5 flex justify-center pb-32">
        <a
          href={program.linkUrl}
          target="_blank"
          className="btn btn-primary btn-outline !rounded-full w-full font-semibold !text-black !border-primary mt-7"
        >
          상세보기
        </a>
      </div>
    </div>
  );
}
