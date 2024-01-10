import Sheet, { SheetRef } from "react-modal-sheet";
import { useEffect, useRef, useState } from "react";
import type { CenterType } from "@/types/center";
import { Coordinates } from "@/types/map";
import Icons from "@/components/icons";
import SearchList from "@/components/search/list";

export default function SearchResult({
  centers,
  loc,
  renewLoc,
  nowMapCenter,
}: {
  centers: CenterType[];
  loc: Coordinates;
  renewLoc: () => void;
  nowMapCenter: Coordinates;
}) {
  const container = useRef<HTMLDivElement>(null);
  const sheet = useRef<SheetRef>(null);
  const [mounted, setMounted] = useState(false);
  const snapTo = (i: number) => sheet.current?.snapTo(i);
  const [height, setHeight] = useState(900);

  useEffect(() => {
    if (container.current) setMounted(true);
    setHeight(window.innerHeight);
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
          snapPoints={[height - 152, 60]}
          initialSnap={1}
          mountPoint={container.current!}
          className="!absolute !z-[100]"
        >
          <Sheet.Container className="!bg-background relative">
            <button
              className="absolute -top-12 left-2 btn btn-ghost btn-circle"
              onClick={() => renewLoc()}
            >
              <Icons.GPS className="w-5 h-5 fill-black" />
            </button>
            <Sheet.Header />
            <Sheet.Content className="px-5 pb-12">
              <Sheet.Scroller>
                <SearchList
                  centers={centers}
                  loc={loc}
                  nowMapCenter={nowMapCenter}
                />
              </Sheet.Scroller>
            </Sheet.Content>
          </Sheet.Container>
        </Sheet>
      )}
    </div>
  );
}
