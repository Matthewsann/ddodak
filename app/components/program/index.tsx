import { ProgramType } from "@/types/program";

export default function Program({ program }: { program: ProgramType }) {
  return (
    <div className="flex flex-col">
      <div
        className="relative w-64 h-[120px] rounded bg-gray-500 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${program.profileUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50" />
        <div className="absolute w-full p-3 text-white bottom-0 left-0 text-xs font-medium mt-1">
          <div className="bg-white/60 text-[8px] font-medium text-black px-2 py-0.5 mb-1 w-fit rounded-full">
            {program.etc}
          </div>
          {program.name}
        </div>
        <div className="bg-primary rounded-full px-4 py-1 absolute right-2 top-2 text-[11px] text-white font-medium">
          D-{program.dday}
        </div>
      </div>
    </div>
  );
}
