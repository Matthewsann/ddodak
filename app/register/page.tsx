"use client";

import Header from "@/components/header";
import RegisterForm from "./form";
import { useState } from "react";
import Agreement from "./agreement";
import RegisterOKModal from "./modal";
import { RegisterType } from "@/types/user";

export default function Register() {
  const [status, setStatus] = useState<"agreement" | "form">("agreement");
  const [isRegisterOk, setIsRegisterOk] = useState(false);
  const [userInfo, setUserInfo] = useState<RegisterType>({
    id: "",
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    signUpWay: "EMAIL",
  });

  return (
    <div className="w-full h-[100dvh] flex flex-col">
      {status === "agreement" && (
        <>
          <Header title="이용 약관 동의" />
          <Agreement next={() => setStatus("form")} />
        </>
      )}
      {status === "form" && (
        <>
          <Header />
          <main className="flex flex-col items-center w-full px-8 h-full mt-16">
            <div className="w-full text-center text-primary font-semibold text-lg border-b border-b-primary py-3">
              회원가입
            </div>
            <RegisterForm
              userInfo={userInfo}
              setUserInfo={setUserInfo}
              next={() => setIsRegisterOk(true)}
            />
          </main>
        </>
      )}
      {isRegisterOk && <RegisterOKModal name={userInfo.name} />}
    </div>
  );
}
