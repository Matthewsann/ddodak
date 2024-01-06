import Header from "@/components/header";
import RegisterForm from "./form";

export default function Login() {
  return (
    <div className="w-full h-[100dvh] flex flex-col">
      <Header />
      <main className="flex flex-col items-center w-full px-8 h-full mt-16">
        <div className="w-full text-center text-primary font-semibold text-lg border-b border-b-primary py-3">
          회원가입
        </div>
        <RegisterForm />
      </main>
    </div>
  );
}
