import Sheet, { SheetRef } from "react-modal-sheet";
import CenterCard from "../components/center/card";
import { useEffect, useRef, useState } from "react";
import type { CenterType } from "@/types/center";
import { Coordinates } from "@/types/map";
import { getDistanceKm } from "@/utils/latlng-to-meter";
import Icons from "@/components/icons";

export default function SearchResult({
  centers,
  loc,
}: {
  centers: CenterType[];
  loc: Coordinates;
}) {
  const container = useRef<HTMLDivElement>(null);
  const sheet = useRef<SheetRef>(null);
  const [mounted, setMounted] = useState(false);
  const snapTo = (i: number) => sheet.current?.snapTo(i);

  useEffect(() => {
    if (container.current) setMounted(true);
  }, []);

  return (
    <div
      ref={container}
      className="absolute bottom-0 left-0 right-0 pointer-events-none h-full flex justify-center"
    >
      <button
        className="absolute bottom-20 btn btn-primary btn-outline z-[99] bg-white rounded-full !text-black text-[13px] font-normal border-2 !border-primary pointer-events-auto"
        onClick={() => {
          snapTo(0);
        }}
      >
        <Icons.Hamburger className="w-4 h-4" />
        목록 보기
      </button>
      {mounted && (
        <Sheet
          ref={sheet}
          isOpen={true}
          onClose={() => {}}
          snapPoints={[800, 60]}
          initialSnap={1}
          mountPoint={container.current!}
          className="!absolute !z-[100]"
        >
          <Sheet.Container className="!bg-background">
            <Sheet.Header />
            <Sheet.Content className="px-5 pb-12">
              <Sheet.Scroller>
                {centers.length > 0 ? (
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
                    <img
                      src="/asset/map/no-result.png"
                      className="w-[138px] h-[147px]"
                    />
                    <button className="btn btn-lg !rounded-full btn-primary w-full !text-white -translate-y-12">
                      적용하기
                    </button>
                  </div>
                )}
              </Sheet.Scroller>
            </Sheet.Content>
          </Sheet.Container>
        </Sheet>
      )}
    </div>
  );
}
