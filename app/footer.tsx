import Link from "next/link";
import Icons from "./components/icons";
import cc from "classcat";

const ROUTERS = [
  { icon: <Icons.Home />, text: "홈", route: "/", key: "home" },
  { icon: <Icons.Map />, text: "지도", route: "/map", key: "map" },
  {
    icon: <Icons.EmojiSmile />,
    text: "상담사",
    route: "/matching",
    key: "matching",
  },
  {
    icon: <Icons.Tablet />,
    text: "프로그램",
    route: "/programs",
    key: "programs",
  },
  { icon: <Icons.User />, text: "마이", route: "/mypage", key: "mypage" },
];

export const Footer = ({ selected }: { selected: string }) => (
  <div className="flex justify-center fixed inset-x-0 bottom-0">
    <footer className="w-full max-w-md left-0 right-0 bottom-0 px-4 pb-5">
      <div className="w-full grid grid-cols-5 py-2 px-7 rounded-full shadow-float bg-background">
        {ROUTERS.map((item, index) => (
          <Link
            key={index}
            href={item.route}
            className={cc([
              "flex flex-col items-center justify-center relative",
              selected === item.key
                ? "text-primary stroke-primary"
                : "text-black stroke-black",
            ])}
          >
            <div className="w-6 h-6 z-[1]">{item.icon}</div>
            <div className="text-[11px] font-medium z-[1]">{item.text}</div>
          </Link>
        ))}
      </div>
    </footer>
  </div>
);
