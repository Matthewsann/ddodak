import FilterItem from "../components/filter/item";
import Icons from "../components/icons";

export default function SearchFilter({ close }: { close: () => void }) {
  return (
    <div className="absolute top-0 inset-x-0 min-h-[100dvh] bg-background z-[1000]">
      <header className="px-4 py-2 grid grid-cols-[48px_1fr_48px]">
        <button className="btn btn-ghost btn-circle" onClick={() => close()}>
          <Icons.GoBack className="shrink-0" />
        </button>
        <div className="flex items-center justify-center font-semibold">
          필터 목록
        </div>
      </header>
      <hr className="border-primary mx-6 mb-5" />
      <main className="flex flex-col px-6">
        <div className="flex gap-2 items-end font-medium">
          <div className="text-sm">상담 유형</div>
          <div className="text-black/50 text-[10px]">중복선택 가능</div>
        </div>
        <div className="flex gap-2 mt-4">
          <FilterItem checked>대면상담</FilterItem>
          <FilterItem checked={false}>비대면상담</FilterItem>
        </div>
        <div>{/* TODO: 필터 추가 */}</div>
      </main>
    </div>
  );
}
