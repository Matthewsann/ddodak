import Sheet from "react-modal-sheet";
import CounselorCard from "../components/counselor/card";
import { useEffect, useRef, useState } from "react";

export default function SearchResult() {
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
          snapPoints={[800, 200]}
          initialSnap={1}
          mountPoint={ref.current!}
          className="!absolute"
        >
          <Sheet.Container className="!bg-background">
            <Sheet.Header />
            <Sheet.Content className="px-5 pb-12">
              <Sheet.Scroller>
                {[...Array(10)].map((_, i) => (
                  <CounselorCard key={i} />
                ))}
              </Sheet.Scroller>
            </Sheet.Content>
          </Sheet.Container>
        </Sheet>
      )}
    </div>
  );
}
