import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "./footer";

export const metadata: Metadata = {
  title: "또닥또닥",
  description: "내게 맞는 상담사 찾기",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-full h-screen flex items-center justify-center bg-primary">
        <main className="relative w-full max-w-md min-h-screen bg-white h-full">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
