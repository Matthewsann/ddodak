import Banner from "./banner";
import CounselorCard from "./counselor-card";
import { Nav } from "./navbar";
import Header from "./header";
import Programs from "./programs";
import Recommend from "./recommend";

export default function Home() {
  return (
    <>
      <Header />
      <div className="w-full flex flex-col mt-16 pb-24">
        <Banner />
        <CounselorCard />
        <div className="w-full h-full flex flex-col gap-8">
          <Recommend />
          <Programs />
        </div>
      </div>
      <Nav selected="home" />
    </>
  );
}
