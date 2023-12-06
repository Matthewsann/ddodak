import Icons from "./components/icons";
import Logo from "@/../public/logo.svg";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md h-16 fixed top-0 left-0 z-50 px-4 flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <Logo />
      </div>
      <div className="flex gap-1">
        <button className="btn btn-ghost btn-circle">
          <Icons.Search />
        </button>
        <button className="btn btn-ghost btn-circle">
          <Icons.Signout />
        </button>
      </div>
    </header>
  );
}
