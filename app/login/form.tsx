"use client";

import cc from "classcat";
import Link from "next/link";
import { useState } from "react";

export default function LoginForm() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="py-8 w-full">
      <label className="flex flex-col gap-1 w-full">
        <span className="font-medium text-sm">ID 아이디</span>
        <input
          type="text"
          className="input rounded-full bg-black/10 font-light text-xs"
          placeholder="아이디 입력"
        />
      </label>
      <label className="flex flex-col gap-1 w-full mt-5">
        <span className="font-medium text-sm">PW 비밀번호</span>
        <div className="flex items-center justify-end w-full">
          <button
            className={cc([
              "absolute text-xs px-4",
              showPassword ? "text-black/60" : "text-secondary",
            ])}
            onClick={() => setShowPassword((s) => !s)}
          >
            보기
          </button>
          <input
            type={showPassword ? "text" : "password"}
            className="input rounded-full bg-black/10 font-light text-xs w-full"
            placeholder="비밀번호 입력"
          />
        </div>
      </label>

      <div className="relative flex justify-center">
        {error && (
          <div className="absolute text-center p-2 text-[11px] font-medium text-primary">
            아이디 또는 비밀번호를 잘못 입력했습니다.
            <br />
            입력하신 내용을 다시 확인해주세요.
          </div>
        )}
      </div>

      <div className="mt-16 px-5">
        <button className="btn btn-primary btn-lg btn-outline rounded-full w-full group active:bg-primary">
          <span className="text-black font-semibold text-base group-active:text-white">
            로그인
          </span>
        </button>
      </div>

      <div className="grid grid-cols-[1fr_1px_1fr] gap-8 items-center mt-4">
        <div className="w-full text-right">
          <Link href="#">아이디 찾기</Link>
        </div>
        <div className="w-px h-4 bg-black" />
        <div>
          <Link href="#">비밀번호 찾기</Link>
        </div>
      </div>
    </div>
  );
}
