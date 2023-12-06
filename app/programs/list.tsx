import ProgramItem from "./item";

const fetchData = async () => {
  return new Promise<number[]>((resolve, reject) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    }, 1000);
  });
};

export default async function ProgramList() {
  const data: number[] = await fetchData();
  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-6">
      {data.map((item, i) => (
        <ProgramItem key={i} />
      ))}
    </div>
  );
}
