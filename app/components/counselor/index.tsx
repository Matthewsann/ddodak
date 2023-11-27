import { CounselorType } from "./type";

export default function Counselor({ counselor }: { counselor: CounselorType }) {
  return (
    <div className="flex flex-col">
      <div className="w-28 h-28 rounded bg-gray-500 overflow-hidden">
        <img src={counselor.image} className="w-full h-full object-cover" />
      </div>
      <div className="text-xs font-medium mt-1">{counselor.name} 상담사</div>
      <div className="text-[10px] font-light">{counselor.location}</div>
    </div>
  );
}
