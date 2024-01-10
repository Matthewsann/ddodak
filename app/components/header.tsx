"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Icons from "./icons";

export default function Header({
  context,
  title,
  backQuery,
}: {
  context?: any;
  title?: string;
  backQuery?: string;
}) {
  const router = useRouter();

  return (
    <div className="fixed inset-x-0 flex justify-center top-0 z-20">
      <div className="w-full max-w-md px-4 h-16 grid grid-cols-[44px_1fr_44px] items-center bg-background">
        <button
          className="btn btn-ghost btn-circle"
          onClick={() => {
            if (backQuery) {
              router.replace(backQuery);
              return;
            }
            router.back();
          }}
        >
          <Icons.GoBack />
        </button>
        {title && (
          <div className="text-center text-base font-semibold">{title}</div>
        )}
      </div>
    </div>
  );
}
