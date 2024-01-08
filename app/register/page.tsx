"use client";

import Header from "@/components/header";
import RegisterForm from "./form";
import { useState } from "react";
import Agreement from "./agreement";

export default function Login() {
  const [status, setStatus] = useState<"agreement" | "form">("agreement");
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
            <RegisterForm />
          </main>
        </>
      )}
    </div>
  );
}
