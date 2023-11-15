"use client";

import Link from "next/link";
import Icons from "../components/icons";
import MapContainer from "./map/container";
import { useRouter } from "next/navigation";

export default function Map() {
  const router = useRouter();
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full flex flex-col bg-background px-4 py-2 shadow z-10">
        <div className="flex items-center justify-between gap-2">
          <button
            className="btn btn-ghost btn-circle"
            onClick={() => router.back()}
          >
            <Icons.GoBack className="shrink-0" />
          </button>
          <input
            className="h-7 px-3 rounded-full w-full bg-footer shadow-float font-medium text-[11px] placeholder:text-black/40"
            placeholder="성북구 안암동"
          />
          <Link className="btn btn-ghost btn-circle" href={"/"}>
            <Icons.Home className="shrink-0" />
          </Link>
        </div>
        <div className="flex items-center">
          <Link className="btn btn-ghost btn-circle" href={"/"}>
            <Icons.Filter className="shrink-0" />
          </Link>
        </div>
      </div>
      <div className="w-full h-full bg-green-400">
        <MapContainer />
      </div>
    </div>
  );
}
