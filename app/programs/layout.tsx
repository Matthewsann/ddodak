import Header from "@/components/header";
import { Nav } from "@/navbar";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header title="프로그램" />
      {children}
      <Nav selected="programs" />
    </>
  );
}
