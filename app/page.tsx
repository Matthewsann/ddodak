import { Footer } from "./footer";
import Hero from "./hero";
import Programs from "./programs";
import Recommend from "./recommend";

export default function Home() {
  return (
    <>
      <div className="w-full pb-8 flex flex-col">
        <Hero />
        <div className="w-full flex justify-center">
          <div className="-translate-y-1/2">
            <button className="shadow-none btn btn-primary min-h-0 h-auto text-base py-4 px-[58px] font-bold rounded-full text-white">
              상담사 추천 받기
            </button>
          </div>
        </div>
        <div className="w-full h-full flex flex-col gap-8">
          <Recommend />
          <Programs />
        </div>
      </div>
      <Footer />
    </>
  );
}
