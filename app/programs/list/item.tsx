import { ProgramType } from "@/types/program";
import { format } from "date-fns";
import Link from "next/link";

export default function ProgramItem({ program }: { program: ProgramType }) {
  return (
    <Link href={`/programs/${program.id}`} className="flex flex-col">
      <div className="w-full aspect-[1/1.414] rounded-xl overflow-hidden">
        <img
          className="w-full h-full object-cover bg-black"
          src={program.profileUrl}
        />
      </div>
      <div className="font-light text-xs mt-2 flex flex-col gap-0.5">
        <div className="text-sm font-semibold">{program.name}</div>
        <div>{program.programMaster}</div>
        <div>| {program.shortAddress}</div>

        <div className="mt-2">
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
        <div>{program.actionDate}</div>

        <div className="mt-2 font-medium">
          {program.price}원 | 총 {program.actionCount}회
        </div>
      </div>
    </Link>
  );
}
