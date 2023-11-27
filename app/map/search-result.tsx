import Sheet from "react-modal-sheet";
import CounselorCard from "../components/counselor/card";

export default function SearchResult() {
  return (
    <Sheet
      isOpen={true}
      onClose={() => {}}
      snapPoints={[800, 200]}
      initialSnap={1}
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
  );
}
