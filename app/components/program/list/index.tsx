import Program from "..";
import { ProgramType } from "../type";

const fetchData = async () => {
  return new Promise<ProgramType[]>((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          title: "서울시 청년 그룹 상담 세션",
          image:
            "https://plus.unsplash.com/premium_photo-1668104454442-a251cc42ee58",
          online: true,
          "remain-date": 3,
        },
        {
          title: "서울시 청년 그룹 상담 세션",
          image:
            "https://plus.unsplash.com/premium_photo-1668104454442-a251cc42ee58",
          online: false,
          "remain-date": 4,
        },
      ]);
    }, 1000);
  });
};

export default async function ProgramList() {
  const data = await fetchData();
  return (
    <div className="flex gap-4">
      {data.map((item, i) => (
        <Program key={i} program={item} />
      ))}
    </div>
  );
}
