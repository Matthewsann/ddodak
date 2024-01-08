"use client";

import { PRIVACY, TERMS } from "@/constants/terms";
import cc from "classcat";
import { useState } from "react";

export default function Agreement({ next }: { next: () => void }) {
  const [checkedTerms, setCheckedTerms] = useState(false);
  const [checkedPrivacy, setCheckedPrivacy] = useState(false);

  return (
    <main className="flex flex-col items-center w-full px-8 h-full mt-16">
      <div
        className={cc([
          "w-full rounded-full bg-[#D9D9D9] grid grid-cols-3 h-10 items-center text-center font-semibold px-5",
          checkedTerms && checkedPrivacy ? "text-black" : "text-black/60",
        ])}
      >
        <input
          type="checkbox"
          className="checkbox checkbox-primary"
          checked={checkedTerms && checkedPrivacy}
          onChange={(e) => {
            setCheckedTerms(e.target.checked);
            setCheckedPrivacy(e.target.checked);
          }}
        />
        약관 전체 동의
      </div>

      <div className="flex gap-3 items-center w-full mt-7 font-semibold">
        <input
          type="checkbox"
          className="checkbox checkbox-primary"
          checked={checkedTerms}
          onChange={(e) => setCheckedTerms(e.target.checked)}
        />
        <div
          className={cc(["text-sm text-black", !checkedTerms && "opacity-60"])}
        >
          이용약관 <span className="text-secondary">(필수)</span>
        </div>
      </div>
      <div
        className="h-24 rounded border border-black/30 p-2 text-[11px] no-scrollbar mt-3 font-medium text-black/60 overflow-y-auto overflow-x-hidden"
        dangerouslySetInnerHTML={{
          __html: TERMS.replaceAll("\n", "<br/>").replaceAll(
            /\*\*(.*?)\*\*/g,
            "<span class='font-bold'>$1</span>"
          ),
        }}
      ></div>

      <div className="flex gap-3 items-center w-full mt-7 font-semibold">
        <input
          type="checkbox"
          className="checkbox checkbox-primary"
          checked={checkedPrivacy}
          onChange={(e) => setCheckedPrivacy(e.target.checked)}
        />
        <div
          className={cc([
            "text-sm text-black",
            !checkedPrivacy && "opacity-60",
          ])}
        >
          개인정보 처리방침 <span className="text-secondary">(필수)</span>
        </div>
      </div>
      <div
        className="h-24 rounded border border-black/30 p-2 text-[11px] no-scrollbar mt-3 font-medium text-black/60 overflow-y-auto overflow-x-hidden"
        dangerouslySetInnerHTML={{
          __html: PRIVACY.replaceAll("\n", "<br/>").replaceAll(
            /\*\*(.*?)\*\*/g,
            "<span class='font-bold'>$1</span>"
          ),
        }}
      ></div>

      <button
        className="btn btn-primary mt-8 btn-outline w-full !rounded-full btn-lg !text-black !border-primary"
        disabled={!checkedTerms || !checkedPrivacy}
        onClick={() => {
          next();
        }}
      >
        적용하기
      </button>
    </main>
  );
}
