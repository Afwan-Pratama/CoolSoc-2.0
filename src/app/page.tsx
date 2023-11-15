import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import Sidebar from "./_components/Navbar/Sidebar";

export const metadata = {
  title: "CoolSoc 2.0",
  description: "Next-Generation Social Media",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <>
      <Sidebar />
      <main className="flex min-h-screen flex-col items-center justify-center"></main>
    </>
  );
}
