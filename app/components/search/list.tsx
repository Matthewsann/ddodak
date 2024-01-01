import { CenterType } from "@/types/center";
import { getDistanceKm } from "@/utils/latlng-to-meter";
import CenterCard from "./card";

export default function SearchList({
  centers,
  loc,
}: {
  centers: CenterType[];
  loc: [number, number];
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
      <button className="btn btn-lg !rounded-full btn-primary w-full !text-white -translate-y-12">
        적용하기
      </button>
    </div>
  );
}
