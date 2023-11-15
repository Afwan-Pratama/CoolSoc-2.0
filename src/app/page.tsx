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
    <div className="text-font flex dark:text-font-dark">
      <nav className="basis-3/12">
        <Sidebar />
      </nav>
      <main className="flex min-h-screen basis-6/12 flex-col items-center justify-center">
        main
      </main>
      <aside className="basis-3/12">aside</aside>
    </div>
  );
}
