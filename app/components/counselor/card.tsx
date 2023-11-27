export default function Card() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-24 h-24 rounded bg-black"></div>
      <div>
        <div className="text-sm font-medium">골든햄스터 상담 센터</div>
        <div className="font-light text-[11px]">
          <span className="font-medium">2.5km</span> | 성북구 안암동
        </div>
        <div className="flex gap-2 text-xs mt-1">
          <div className="font-medium">영업중</div>
          <div className="font-light">19:00 영업 종료</div>
        </div>

        <div className="mt-2 text-[13px]">대표 가격 : 50,000원</div>
        <div className="text-[11px] mt-0.5">후기 99+</div>
      </div>
    </div>
  );
}
