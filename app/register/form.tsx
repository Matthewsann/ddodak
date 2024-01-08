"use client";

import { authIDVerify, authNameVerify, authSignUp } from "@/apis/auth";
import { RegisterType } from "@/types/user";
import cc from "classcat";
import { useCallback, useEffect, useState } from "react";

export default function RegisterForm({
  userInfo,
  setUserInfo,
  next,
}: {
  userInfo: RegisterType;
  setUserInfo: React.Dispatch<React.SetStateAction<RegisterType>>;
  next: () => void;
}) {
  const [isIDExist, setIsIDExist] = useState(false);
  const [isNameExist, setIsNameExist] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const verifyName = useCallback(async () => {
    try {
      const res = await authNameVerify({ name: userInfo.name });
      setIsNameExist(!res);
    } catch (e) {
      setIsNameExist(true);
      console.log(e);
    }
  }, [userInfo.name]);

  const verifyID = useCallback(async () => {
    try {
      const res = await authIDVerify({ id: userInfo.id });
      setIsIDExist(!res);
    } catch (e) {
      setIsIDExist(true);
      console.log(e);
    }
  }, [userInfo.id]);

  const handleAuthPhone = useCallback(async () => {
    try {
    } catch (e) {}
  }, [userInfo.phoneNumber]);

  useEffect(() => {
    if (userInfo.name.length > 0) {
      verifyName();
    }
  }, [userInfo.name, verifyName]);

  useEffect(() => {
    if (userInfo.id.length > 0) {
      verifyID();
    }
  }, [userInfo.id, verifyID]);

  const handleSubmit = useCallback(async () => {
    try {
      const res = await authSignUp(userInfo);
      if (!res) {
        alert("회원가입에 실패했습니다.");
        return;
      }
      next();
    } catch (e) {
      console.log(e);
    }
  }, [userInfo]);

  return (
    <div className="py-8 w-full h-max flex flex-col justify-between">
      <div>
        <label className="flex flex-col gap-1 w-full relative">
          <span className="font-medium text-sm">ID 아이디</span>
          <div className="flex items-center justify-end w-full">
            <div
              className={cc([
                "absolute text-xs px-4",
                isIDExist ? "text-primary" : "text-secondary",
              ])}
            >
              {isIDExist ? "사용불가" : "사용가능"}
            </div>
            <input
              type="text"
              className="input rounded-full bg-black/10 font-light text-xs w-full"
              placeholder="아이디"
              value={userInfo.id}
              onChange={(e) =>
                setUserInfo((s) => ({ ...s, id: e.target.value }))
              }
            />
          </div>
          {isIDExist && (
            <div className="absolute text-primary left-6 -bottom-5 text-[11px] font-medium">
              이미 가입된 아이디가 존재합니다.
            </div>
          )}
        </label>
        <label className="relative flex flex-col gap-1 w-full mt-5">
          <span className="font-medium text-sm">닉네임(이름)</span>
          <div className="flex items-center justify-end w-full">
            <div
              className={cc([
                "absolute text-xs px-4",
                isNameExist ? "text-primary" : "text-secondary",
              ])}
            >
              {isNameExist ? "사용불가" : "사용가능"}
            </div>
            <input
              type="text"
              className="input rounded-full bg-black/10 font-light text-xs w-full"
              placeholder="닉네임(이름)"
              value={userInfo.name}
              onChange={(e) =>
                setUserInfo((s) => ({ ...s, name: e.target.value }))
              }
            />
          </div>
          {isNameExist && (
            <div className="absolute text-primary left-6 -bottom-5 text-[11px] font-medium">
              이미 동일한 닉네임이 존재합니다.
            </div>
          )}
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
          disabled={
            isIDExist ||
            isNameExist ||
            confirmPassword !== userInfo.password ||
            userInfo.password.length < 8
          }
          onClick={() => {
            handleSubmit();
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
