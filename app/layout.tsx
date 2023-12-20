import type { Metadata } from "next";
import "./globals.css";
import Footer from "./footer";

export const metadata: Metadata = {
  title: "상담플러스",
  description: "대한민국 모든 상담센터/상담사 정보를 한 곳에!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-full h-[100dvh] flex items-center justify-center bg-primary">
        <main className="relative w-full max-w-md h-[100dvh] max-h-[100dvh] bg-background overflow-x-hidden overflow-y-scroll no-scrollbar">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
