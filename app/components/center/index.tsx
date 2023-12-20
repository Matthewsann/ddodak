import { CenterType } from "@/types/center";

export default function Center({ center }: { center: CenterType }) {
  return (
    <div className="flex flex-col">
      <div className="w-28 h-28 rounded bg-gray-500 overflow-hidden">
        <img src={center.profileUrl} className="w-full h-full object-cover" />
      </div>
      <div className="text-xs font-medium mt-1">{center.name} 상담사</div>
      <div className="text-[10px] font-light">{center.address}</div>
    </div>
  );
}
