import SearchHeader from "@/components/search-header";

export default function Search() {
  return (
    <div className="w-full flex flex-col h-[100dvh]">
      <SearchHeader noFilter />
      <div className="text-[11px] font-medium text-black/40 px-7 mt-2">
        최근 검색어
      </div>
      <div className="flex justify-center gap-4 font-medium text-black/70 text-[11px]">
        <div>안암역</div>
        <div>보문</div>
        <div>수유동</div>
        <div>qhans</div>
      </div>
      <div className="w-full h-full text-center flex items-center justify-center font-medium text-sm">
        센터명, 지하철역, 지역명을
        <br />
        검색해 보세요.
      </div>
    </div>
  );
}
