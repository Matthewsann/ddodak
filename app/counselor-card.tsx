import Link from "next/link";

export default function CounselorCard() {
  return (
    <div className="px-4 py-5">
      <div className="font-semibold text-sm mb-2">추천 상담사</div>
      <div className="bg-primary rounded-3xl flex flex-col items-center gap-3 py-6 font-medium">
        <div className="text-white">마음 맞는 상담사를 찾고 싶다면?</div>
        <Link
          href={"/matching"}
          className="bg-white rounded-full px-4 py-2 text-black text-xs"
        >
          지금 내게 필요한 상담사 추천 받기 👉
        </Link>
      </div>
    </div>
  );
}
