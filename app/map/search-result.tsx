import Sheet from "react-modal-sheet";
import CounselorCard from "../components/counselor/card";
import { useEffect, useRef, useState } from "react";
import type { CenterType } from "@/types/center";
import { Coordinates } from "@/types/map";
import { getDistanceKm } from "@/utils/latlng-to-meter";

export default function SearchResult({
  centers,
  loc,
}: {
  centers: CenterType[];
  loc: Coordinates;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (ref.current) setMounted(true);
  }, []);

  return (
    <div
      ref={ref}
      className="absolute bottom-0 left-0 right-0 pointer-events-none h-full"
    >
      {mounted && (
        <Sheet
          isOpen={true}
          onClose={() => {}}
          snapPoints={[800, 100]}
          initialSnap={1}
          mountPoint={ref.current!}
          className="!absolute !z-[100]"
        >
          <Sheet.Container className="!bg-background">
            <Sheet.Header />
            <Sheet.Content className="px-5 pb-12">
              <Sheet.Scroller>
                {centers
                  .sort(
                    (a, b) =>
                      getDistanceKm(loc[1], loc[0], a.latitude, a.longitude) -
                      getDistanceKm(loc[1], loc[0], b.latitude, b.longitude)
                  )
                  .map((center, i) => (
                    <CounselorCard
                      key={i}
                      center={center}
                      distance={getDistanceKm(
                        loc[1],
                        loc[0],
                        center.latitude,
                        center.longitude
                      )}
                    />
                  ))}
              </Sheet.Scroller>
            </Sheet.Content>
          </Sheet.Container>
        </Sheet>
      )}
    </div>
  );
}
