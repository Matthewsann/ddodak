"use client";

import cc from "classcat";
import { useCallback, useState } from "react";

interface Props {
  id: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  signUpWay: "EMAIL";
}

export default function RegisterForm() {
  const [userInfo, setUserInfo] = useState<Props>({
    id: "",
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    signUpWay: "EMAIL",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleAuthPhone = useCallback(async () => {
    try {
    } catch (e) {}
  }, [userInfo.phoneNumber]);

  return (
    <div className="py-8 w-full h-max flex flex-col justify-between">
      <div>
        <label className="flex flex-col gap-1 w-full">
          <span className="font-medium text-sm">ID 아이디</span>
          <input
            type="text"
            className="input rounded-full bg-black/10 font-light text-xs"
            placeholder="아이디"
            value={userInfo.id}
            onChange={(e) => setUserInfo((s) => ({ ...s, id: e.target.value }))}
          />
        </label>
        <label className="flex flex-col gap-1 w-full mt-5">
          <span className="font-medium text-sm">닉네임(이름)</span>
          <input
            type="text"
            className="input rounded-full bg-black/10 font-light text-xs"
            placeholder="닉네임(이름)"
            value={userInfo.name}
            onChange={(e) =>
              setUserInfo((s) => ({ ...s, name: e.target.value }))
            }
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
              value={userInfo.password}
              onChange={(e) =>
                setUserInfo((s) => ({ ...s, password: e.target.value }))
              }
            />
          </div>
        </label>

        <label className="flex flex-col gap-1 w-full mt-5">
          <span className="font-medium text-sm">PW 비밀번호 확인</span>
          <div className="flex items-center justify-end w-full">
            <div
              className={cc([
                "absolute text-xs px-4",
                confirmPassword === userInfo.password
                  ? "text-secondary"
                  : "text-black/60",
              ])}
            >
              {confirmPassword === userInfo.password ? "일치" : "불일치"}
            </div>
            <input
              type="password"
              className="input rounded-full bg-black/10 font-light text-xs w-full"
              placeholder="비밀번호 입력"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </label>

        <label className="flex flex-col gap-1 w-full mt-5">
          <span className="font-medium text-sm">이메일</span>
          <input
            type="text"
            className="input rounded-full bg-black/10 font-light text-xs"
            placeholder="이메일"
            value={userInfo.email}
            onChange={(e) =>
              setUserInfo((s) => ({ ...s, email: e.target.value }))
            }
          />
        </label>
        <label className="flex flex-col gap-1 w-full mt-5">
          <span className="font-medium text-sm">Phone number 전화번호</span>
          <div className="flex items-center justify-end w-full">
            <button
              className={cc(["absolute text-xs px-4 text-secondary"])}
              onClick={() => handleAuthPhone()}
            >
              인증
            </button>
            <input
              type="text"
              className="input rounded-full bg-black/10 font-light text-xs w-full"
              placeholder="전화번호"
              value={userInfo.phoneNumber}
              onChange={(e) =>
                setUserInfo((s) => ({ ...s, phoneNumber: e.target.value }))
              }
            />
          </div>
        </label>
      </div>

      <div className="px-5 pb-14 mt-11">
        <button
          className="btn btn-primary btn-lg btn-outline rounded-full w-full group active:bg-primary"
          onClick={() => {
            // handleSubmit();
          }}
        >
          <span className="text-black font-semibold text-base group-active:text-white">
            회원가입
          </span>
        </button>
      </div>
    </div>
  );
}
