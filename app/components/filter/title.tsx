export default function FilterTitle({
  title,
  duplicate = false,
}: {
  title: string;
  duplicate?: boolean;
}) {
  return (
    <div className="flex gap-2 items-end font-medium">
      <div className="text-sm">{title}</div>
      {duplicate && (
        <div className="text-black/50 text-[10px]">중복선택 가능</div>
      )}
    </div>
  );
}
