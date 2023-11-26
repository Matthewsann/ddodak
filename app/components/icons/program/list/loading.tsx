export default function Loading() {
  return (
    <div className="flex gap-4">
      {[...new Array(5)].map((_, i) => (
        <div
          className="relative w-64 h-[120px] rounded bg-gray-200 animate-pulse overflow-hidden bg-cover bg-center"
          key={i}
        />
      ))}
    </div>
  );
}
