import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { HomeIcon, Building, CircleUser, UserCog } from "lucide-react";
import Link from "next/link";

export default function TopMenu() {
  const { data: session } = useSession();

  return (
    <div className="navbar bg-[#fcfbf7] shadow-md border-b" color="fcfbf7">
      {/* Left Section */}
      <div className="flex-1">
        <div className="flex items-center space-x-4">
          {/* icon */}
          <div className="flex items-center justify-center rounded-full bg-c1 w-12 h-12">
            <span className="text-center font-semibold">NNN</span>
          </div>

          <span className="text-xl font-bold text-c1">JobFair</span>
          <ul className="menu menu-horizontal px-1 space-x-4">
            <li>
              <Link href="/" className="flex items-center">
                <HomeIcon size={24} />
                Home
              </Link>
            </li>
            <li>
              <Link href="/" className="flex items-center">
                <Building size={24} />
                Companies
              </Link>
            </li>
            <li>
              <Link href="/" className="flex items-center">
                <CircleUser size={24} />
                My Profile
              </Link>
            </li>
            {/* Show Manage Company if user is admin */}
            {session?.user?.role === "admin" && (
              <li>
                <a className="flex items-center">
                  <UserCog size={24} />
                  Manage Company
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-none">
        <div className="flex items-center space-x-4">
          {session ? (
            <div>
              <span className="font-medium text-[#8a7e66]">
                {session.user?.name || "User"}
              </span>
              <button
                className="btn btn-ghost btn-circle"
                onClick={() => signOut()}
              >
                <span className="material-icons">logout</span>
              </button>
            </div>
          ) : (
            <>
              <button
                className="btn btn-ghost text-[#8a7e66] text-l font-bold"
                onClick={() => signIn()}
              >
                Login
              </button>
              <button className="btn text-[#ffffff] bg-[#8a7e66]">
                Register
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
