"use client";

import Header from "@/components/header";
import { useSearchParams } from "next/navigation";

export default function CenterHeader() {
  const searchParams = useSearchParams();

  return <Header backQuery={`/map?${searchParams.toString()}`} />;
}
