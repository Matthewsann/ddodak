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
        "item-button",
        checked ? "bg-primary text-background" : "text-black",
      ])}
      onClick={toggle}
    >
      {children}
    </button>
  );
}
