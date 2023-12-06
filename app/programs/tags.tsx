export default function ProgramTags() {
  return (
    <div className="mt-16 pt-2 py-4 overflow-x-auto sticky top-16 bg-background">
      <div className="flex flex-nowrap gap-2 px-6 w-max">
        {["마감임박순", "거리순"].map((item, i) => (
          <div
            className="rounded-full px-3 py-1 bg-primary text-white text-[11px]"
            key={i}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
