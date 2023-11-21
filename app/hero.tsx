export default function Hero() {
  return (
    <div className="w-full h-80 relative">
      <img
        src="/asset/main/background.png"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30 flex flex-col justify-end px-7 pb-12 text-white gap-1">
        <div className="font-bold text-lg">
          개인 맞춤 상담사를 추천 받아보세요!
        </div>
        <div className="font-medium text-sm">
          설문을 통해 와라랄라라랄라ㅏ 짧은 소개글
        </div>
      </div>
    </div>
  );
}
