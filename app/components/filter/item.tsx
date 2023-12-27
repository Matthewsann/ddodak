import cc from "classcat";

export default function FilterItem({
  checked,
  toggle,
  children,
}: {
  checked: boolean;
  toggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      className={cc([
        "rounded-full text-[11px] px-3 h-6 flex items-center font-medium border border-primary",
        checked ? "bg-primary text-background" : "text-black",
      ])}
      onClick={toggle}
    >
      {children}
    </button>
  );
}
