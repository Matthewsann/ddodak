import { CenterType } from "@/types/center";
import { getDistanceKm } from "@/utils/latlng-to-meter";
import CenterCard from "./card";
import { Coordinates } from "@/types/map";

export default function SearchList({
  centers,
  loc,
  nowMapCenter,
}: {
  centers: CenterType[];
  loc: Coordinates;
  nowMapCenter: Coordinates;
}) {
  return centers.length > 0 ? (
    centers
      .sort(
        (a, b) =>
          getDistanceKm(loc[1], loc[0], a.latitude, a.longitude) -
          getDistanceKm(loc[1], loc[0], b.latitude, b.longitude)
      )
      .map((center, i) => (
        <CenterCard
          key={i}
          center={center}
          nowMapCenter={nowMapCenter}
          loc={loc}
          distance={getDistanceKm(
            loc[1],
            loc[0],
            center.latitude,
            center.longitude
          )}
        />
      ))
  ) : (
    <div className="text-center flex flex-col items-center justify-center h-full">
      <div className="translate-y-4 font-medium text-sm">
        검색결과가 존재하지 않습니다.
      </div>
      <img src="/asset/map/no-result.png" className="w-[138px] h-[147px]" />
      <div className="-translate-y-12 w-full">
        <button className="btn btn-lg !rounded-full btn-primary w-full !text-white">
          센터/상담사 등록 요청하기
        </button>
      </div>
    </div>
  );
}
