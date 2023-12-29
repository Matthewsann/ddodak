export default function ProgramDetailLoading() {
  return (
    <div className="flex flex-col px-7 pt-24">
      <div className="w-full aspect-[1/1.414] rounded-xl overflow-hidden">
        <div className="w-full h-full object-cover skeleton" />
      </div>
      <div className="font-light text-xs mt-2 flex flex-col gap-2">
        <div className="skeleton h-4 w-2/3" />
        <div className="skeleton h-2 w-2/3" />
        <div className="skeleton h-2 w-1/2" />
        <div className="skeleton h-2 w-3/4" />
        <div className="skeleton h-2 w-2/3" />

        <div className="skeleton h-2 w-1/2 mt-2" />
      </div>
    </div>
  );
}
