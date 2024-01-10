import { CenterType } from "@/types/center";
import Link from "next/link";

export default function Card({
  center,
  distance,
}: {
  center: CenterType;
  distance: number;
}) {
  return (
    <Link
      href={`/center/${center.id}`}
      className="flex items-center gap-2 mb-4"
    >
      <div className="w-24 h-24 rounded bg-black overflow-hidden">
        <img src={center.profileUrl} className="w-full h-full object-cover" />
      </div>
      <div>
        <div className="text-sm font-medium">{center.name}</div>
        <div className="font-light text-[11px]">
          <span className="font-medium">
            {distance.toLocaleString()}
            km
          </span>{" "}
          | {center.shortAddress}
        </div>
        <div className="flex gap-2 text-xs mt-0.5">
          <div className="font-medium">영업중</div>
          <div className="font-light">19:00 영업 종료</div>
        </div>

        <div className="mt-2 text-[13px]">
          대표 가격 : {center.price.toLocaleString()}원
        </div>
        <div className="text-[11px] mt-0.5">후기 99+</div>
      </div>
    </Link>
  );
}
