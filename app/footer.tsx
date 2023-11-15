import Link from "next/link";
import Icons from "./components/icons";

const ROUTERS = [
  { icon: <Icons.Home />, text: "홈", route: "/" },
  { icon: <Icons.Map />, text: "지도", route: "/map" },
  { icon: <Icons.EmojiSmile />, text: "매칭", route: "/matching" },
  { icon: <Icons.Tablet />, text: "프로그램", route: "/programs" },
  { icon: <Icons.User />, text: "마이", route: "/mypage" },
];

export const Footer = () => (
  <div className="absolute w-full bottom-0 px-4 pb-5">
    <div className="w-full grid grid-cols-5 py-2 px-7 rounded-full shadow-float bg-background">
      {ROUTERS.map((item, index) => (
        <Link
          key={index}
          href={item.route}
          className="flex flex-col items-center justify-center"
        >
          <div className="w-6 h-6">{item.icon}</div>
          <div className="text-[11px] font-medium">{item.text}</div>
        </Link>
      ))}
    </div>
  </div>
);
