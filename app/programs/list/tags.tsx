import { PROGRAM_ORDERS } from "@/constants/program";
import cc from "classcat";

export default function ProgramTags({
  tag,
  setTag,
}: {
  tag: {
    name: string;
    value: string;
  };
  setTag: React.Dispatch<
    React.SetStateAction<{
      name: string;
      value: string;
    }>
  >;
}) {
  return (
    <div className="mt-16 pt-2 py-4 overflow-x-auto sticky top-16 bg-background shrink-0">
      <div className="flex flex-nowrap gap-2 px-6 w-max">
        {PROGRAM_ORDERS.map((item, i) => (
          <button
            className={cc([
              "rounded-full px-3 py-1 text-[11px] border border-primary",
              item.value === tag.value ? "bg-primary text-white" : "bg-white",
            ])}
            key={i}
            onClick={() => setTag(item)}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}
