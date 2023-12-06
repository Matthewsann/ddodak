import Banner from "./banner";
import CounselorCard from "./counselor-card";
import { Footer } from "./footer";
import Header from "./header";
import Programs from "./programs";
import Recommend from "./recommend";

export default function Home() {
  return (
    <>
      <Header />
      <div className="w-full pb-8 flex flex-col mt-16">
        <Banner />
        <CounselorCard />
        <div className="w-full h-full flex flex-col gap-8">
          <Recommend />
          <Programs />
        </div>
      </div>
      <Footer />
    </>
  );
}
