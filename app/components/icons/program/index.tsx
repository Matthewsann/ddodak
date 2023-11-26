import { ProgramType } from "./type";

export default function Program({ program }: { program: ProgramType }) {
  return (
    <div className="flex flex-col">
      <div
        className="relative w-64 h-[120px] rounded bg-gray-500 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${program.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50" />
        <div className="absolute w-full p-3 text-white bottom-0 left-0 text-xs font-medium mt-1">
          {program.title}
        </div>
        <div className="badge absolute right-2 top-2 text-white bg-transparent text-[11px] border-black">
          {program.status}
        </div>
      </div>
    </div>
  );
}
