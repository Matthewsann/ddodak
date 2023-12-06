"use client";

import { useRouter } from "next/navigation";
import Icons from "./icons";

export default function Header({ title }: { title?: string }) {
  const router = useRouter();

  return (
    <div className="fixed inset-x-0 flex justify-center top-0">
      <div className="w-full max-w-md px-4 h-16 grid grid-cols-[44px_1fr_44px] items-center bg-background z-10">
        <button
          className="btn btn-ghost btn-circle"
          onClick={() => router.back()}
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
