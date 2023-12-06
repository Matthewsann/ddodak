"use client";

import { useRouter } from "next/navigation";
import Icons from "./icons";

export default function Header() {
  const router = useRouter();

  return (
    <div className="w-full px-4 py-2">
      <button
        className="btn btn-ghost btn-circle"
        onClick={() => router.back()}
      >
        <Icons.GoBack />
      </button>
    </div>
  );
}
