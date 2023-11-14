import Counselor from "..";
import { CounselorType } from "../type";

const fetchData = async () => {
  return new Promise<CounselorType[]>((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          name: "김상담",
          image:
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
          location: "서울시 강남구",
        },
        {
          name: "김상담",
          image:
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
          location: "서울시 강남구",
        },
        {
          name: "김상담",
          image:
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
          location: "서울시 강남구",
        },
      ]);
    }, 1000);
  });
};

export default async function CounselorList() {
  const data = await fetchData();
  return (
    <div className="flex gap-4">
      {data.map((item, i) => (
        <Counselor key={i} counselor={item} />
      ))}
    </div>
  );
}
