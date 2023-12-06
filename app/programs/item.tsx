export default function ProgramItem() {
  return (
    <div className="flex flex-col">
      <div className="w-full aspect-[1/1.414] rounded-xl overflow-hidden">
        <div className="w-full h-full object-cover bg-black" />
      </div>
      <div className="font-light text-xs mt-2 flex flex-col gap-0.5">
        <div className="text-sm font-semibold">20대 자기성장 프로그램</div>
        <div>나로살기 심리상담센터</div>
        <div>| 경기도 평택시</div>

        <div className="mt-2">2020. 11. 05 - 12. 24</div>
        <div>매주 목요일 17:00 - 19:00</div>

        <div className="mt-2 font-medium">24만원 | 총 4회</div>
      </div>
    </div>
  );
}
