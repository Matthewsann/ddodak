"use client";

import { useUserStore } from "@/store/user-store";
import Link from "next/link";
import Profile from "./profile";
import Icons from "@/components/icons";
import { Nav } from "@/navbar";

const MENU_ITEMS = [
  {
    name: "센터/상담사 등록 요청",
    href: "/login",
  },
  {
    name: "공지/이벤트",
    href: "/login",
  },
  {
    name: "1:1 문의하기",
    href: "/login",
    channel: true,
  },
  {
    name: "공유하기",
    href: "/login",
  },
];

export default function Home() {
  const { email, setEmail } = useUserStore();

  return (
    <>
      <div className="w-full py-16">
        {email ? (
          <Profile />
        ) : (
          <div className="flex flex-col items-center">
            <div className="font-medium text-primary">로그인이 필요합니다.</div>
            <div className="w-full px-12 mt-4 mb-20">
              <Link
                href="/login"
                className="btn btn-primary btn-lg btn-outline rounded-full w-full group active:bg-primary"
              >
                <span className="text-black font-semibold text-base group-active:text-white">
                  로그인
                </span>
              </Link>
            </div>
          </div>
        )}
        <ul className="divide-y px-8">
          {MENU_ITEMS.map((item, i) => (
            <li key={i} className="font-medium text-sm">
              <Link
                href={item.href}
                className="py-6 w-full flex justify-between"
              >
                {item.name}
                {item.channel && (
                  <div className="badge badge-secondary text-[10px] font-medium gap-2 !h-auto !py-1 px-2">
                    <Icons.Chat />
                    채널톡 문의
                  </div>
                )}
              </Link>
            </li>
          ))}
          <li
            className="w-full flex justify-end"
            onClick={() => {
              setEmail(null);
            }}
          >
            <button className="btn btn-ghost !p-0 font-light text-xs">
              <Icons.Signout className="w-6 stroke-black" />
              로그아웃
            </button>
          </li>
        </ul>
      </div>
      <Nav selected={"mypage"} />
    </>
  );
}
