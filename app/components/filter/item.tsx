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
        "rounded-full text-[11px] px-3 py-1 font-medium",
        checked
          ? "bg-primary text-background"
          : "border text-black border-primary",
      ])}
      onClick={toggle}
    >
      {children}
    </button>
  );
}
