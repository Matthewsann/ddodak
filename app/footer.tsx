import Logo from "@/../public/logo.svg";

export default function Footer() {
  return (
    <footer className="bg-black/10 text-black/60 flex flex-col items-center pt-6 pb-28 px-7 gap-4">
      <div className="flex items-center gap-5 text-[11px] font-medium">
        <div>회사 소개</div>
        <div className="w-px h-4 bg-black/60" />
        <div>이용 안내</div>
        <div className="w-px h-4 bg-black/60" />
        <div>FAQ</div>
      </div>
      <div className="flex items-center gap-5 text-[11px] font-medium">
        <div>이용약관</div>
        <div className="w-px h-4 bg-black/60" />
        <div>개인정보처리방침</div>
        <div className="w-px h-4 bg-black/60" />
        <div>위치정보서비스 이용약관</div>
      </div>
      <div className="w-full flex flex-col gap-4">
        <Logo />
        <div className="text-[10px] font-medium leading-5">
          (주) 또닥또닥
          <br />
          서울특별시 성북구 고려대로24길 32 5층
          <br />
          통신판매업신고: <br />
          전화번호: 010-8934-7286
          <br />
          고객센터: cs@sangdamplus.com | 제휴문의: contact@sangdamplus.com
        </div>
      </div>
    </footer>
  );
}
