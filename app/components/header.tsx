import Icons from "./icons";

export default function Header() {
  return (
    <div className="w-full px-4 py-2">
      <button className="btn btn-ghost btn-circle">
        <Icons.GoBack />
      </button>
    </div>
  );
}
