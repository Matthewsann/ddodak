import Link from "next/link";

export default function RegisterOKModal({ name }: { name: string }) {
  return (
    <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center text-white text-center">
      <div className="font-semibold">{name}님, 가입을 축하합니다.</div>
      회원가입이 완료되었습니다.
      <Link
        href={"/"}
        className="py-3 px-8 mt-5 rounded-full border border-white text-white hover:border-primary hover:bg-white hover:text-black font-medium"
      >
        홈으로 이동하기
      </Link>
    </div>
  );
}
