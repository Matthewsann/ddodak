import Icons from "./components/icons";
import Logo from "@/../public/logo.svg";

export default function Header() {
  return (
    <div className="flex justify-center fixed inset-x-0 top-0 z-10">
      <header className="w-full max-w-md bg-white z-50 px-4 h-16 flex justify-between items-center">
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
    </div>
  );
}
