import {
  ArrowLeftOnRectangleIcon,
  CogIcon,
  HomeIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";

export default async function Sidebar() {
  const session = await getServerAuthSession();
  return (
    <nav className="dark:border-font1-dark border-font1 text-font absolute m-2 flex  h-98vh w-72 flex-col justify-between rounded-lg border-2  bg-crust px-2 py-4  dark:bg-crust-dark dark:text-font-dark">
      <div>
        <div className="container py-10 text-center">
          <Link className="text-4xl font-extrabold" href="/">
            CoolSoc 2.0
          </Link>
        </div>
        <div className="text-xl font-bold">
          <div className="container rounded-lg px-6 py-4 hover:bg-blue hover:text-crust hover:dark:bg-blue-dark hover:dark:text-primary-dark">
            <Link className="flex items-center" href="/">
              <HomeIcon className="mr-4 h-8 w-8" />
              Home
            </Link>
          </div>
          <div className="container rounded-lg px-6 py-4 hover:bg-blue hover:text-crust hover:dark:bg-blue-dark hover:dark:text-primary-dark">
            <Link className="flex items-center" href="/settings">
              <CogIcon className="mr-4 h-8 w-8" />
              Settings
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="container rounded-lg px-6 py-4 hover:bg-blue hover:text-crust hover:dark:bg-blue-dark hover:dark:text-primary-dark">
          <Link className="flex items-center" href="/profile">
            <UserCircleIcon className="mr-4 h-8 w-8" />
            Account Name
          </Link>
        </div>
        <div className="container  rounded-lg px-6 py-4 hover:bg-blue hover:text-crust hover:dark:bg-blue-dark hover:dark:text-primary-dark">
          <button className="flex items-center">
            <ArrowLeftOnRectangleIcon className="mr-4 h-8 w-8" />
            Log Out
          </button>
        </div>
      </div>
    </nav>
  );
}
