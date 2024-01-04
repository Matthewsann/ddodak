"use client";

import { authLogin } from "@/apis/auth";
import cc from "classcat";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

export default function LoginForm() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const handleSubmit = useCallback(async () => {
    try {
      const result = await authLogin({
        id,
        password,
      });

      router.push("/mypage");
    } catch (e) {
      setError(true);
    }
  }, [id, password]);

  return (
    <div className="py-8 w-full h-full flex flex-col justify-between">
      <div>
        <label className="flex flex-col gap-1 w-full">
          <span className="font-medium text-sm">ID 아이디</span>
          <input
            type="text"
            className="input rounded-full bg-black/10 font-light text-xs"
            placeholder="아이디 입력"
            value={id}
            onChange={(e) => setId(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </label>

        <div className="flex justify-center gap-4 items-center mt-10">
          <div>
            <Link href="#">아이디 찾기</Link>
          </div>
          <div className="w-px h-4 bg-black" />
          <div>
            <Link href="#">비밀번호 찾기</Link>
          </div>
          <div className="w-px h-4 bg-black" />
          <div>
            <Link href="/register">회원가입</Link>
          </div>
        </div>
      </div>

      <div className="px-5 pb-14">
        <button
          className="btn btn-primary btn-lg btn-outline rounded-full w-full group active:bg-primary"
          onClick={() => {
            handleSubmit();
          }}
        >
          <span className="text-black font-semibold text-base group-active:text-white">
            로그인
          </span>
        </button>
        <div className="relative flex justify-center">
          {error && (
            <div className="absolute text-center p-2 text-xs font-medium text-primary leading-5">
              아이디 또는 비밀번호를 잘못 입력했습니다.
              <br />
              입력하신 내용을 다시 확인해주세요.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
