"use client";

import { ProgramType } from "@/types/program";
import { useCallback, useEffect, useRef, useState } from "react";
import { programList } from "@/apis/program";
import { throttle } from "lodash";
import ProgramTags from "./list/tags";
import ProgramItem from "./list/item";
import ProgramListLoading from "./list/loading";
import { PROGRAM_ORDERS } from "@/constants/program";

export default function ProgramList() {
  const [data, setData] = useState<ProgramType[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [end, setEnd] = useState(false);
  const [tag, setTag] = useState(PROGRAM_ORDERS[0]);

  const scroll = useRef<HTMLDivElement>(null);

  const fetchPage = useCallback(async () => {
    setLoading(true);
    console.log(page);
    const res = await programList({ page, order: tag.value });
    if (res.length === 0) setEnd(true);
    setData([...data, ...res]);
    setLoading(false);
  }, [data, page, tag]);

  const handleScroll = useCallback(
    throttle(() => {
      if (!scroll.current || end || loading) return;
      if (scroll.current.scrollTop > scroll.current.scrollHeight - 1200)
        setPage((page) => page + 1);
    }, 1000),
    [end, loading]
  );

  useEffect(() => {
    const scrollInstance = scroll.current;
    scrollInstance!.addEventListener("scroll", handleScroll, false);
    return () => {
      scrollInstance?.removeEventListener("scroll", handleScroll, false);
    };
  }, [handleScroll]);

  useEffect(() => {
    fetchPage();
  }, [page, tag]);

  useEffect(() => {
    scroll.current!.scrollTop = 0;
    setData([]);
    setPage(1);
  }, [tag]);

  return (
    <>
      <ProgramTags tag={tag} setTag={setTag} />
      <div className="px-6 pb-24 flex flex-col h-full overflow-hidden">
        <div className="pb-4 font-light text-xs">
          {tag.name} 프로그램입니다.
        </div>
        <div className="h-full overflow-y-auto no-scrollbar" ref={scroll}>
          <div className="grid grid-cols-2 gap-x-3 gap-y-6">
            {data.map((program, i) => (
              <ProgramItem key={program.id} program={program} />
            ))}
          </div>
          {loading && (
            <div className="my-6">
              <ProgramListLoading />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
