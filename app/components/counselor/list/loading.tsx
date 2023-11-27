export default function Loading() {
  return (
    <div className="flex gap-4">
      {[...new Array(5)].map((_, i) => (
        <div className="flex flex-col animate-pulse gap-1" key={i}>
          <div className="w-28 h-28 rounded bg-gray-200"></div>
          <div className="rounded w-3/4 bg-gray-200 h-3"></div>
          <div className="rounded w-1/2 bg-gray-200 h-2"></div>
        </div>
      ))}
    </div>
  );
}
