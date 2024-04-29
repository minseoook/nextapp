import { User } from "@prisma/client";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

type props = {
  mobile?: boolean;
  currentUser?: User | null;
};
const NavItem = ({ mobile, currentUser }: props) => {
  return (
    <ul
      className={`text-md justify-center w-full flex gap-4 items-center ${
        mobile && "flex-col bg-orange-500 h-full"
      }`}
    >
      <li className="py-2 text-center border-b-4 cursor-pointer">
        <Link href="/admin">어드민</Link>
      </li>
      <li className="py-2 text-center border-b-4 cursor-pointer">
        <Link href="/user">유저</Link>
      </li>
      {currentUser ? (
        <li className="py-2 text-center border-b-4 cursor-pointer">
          <button onClick={() => signOut()}>로그아웃</button>
        </li>
      ) : (
        <li className="py-2 text-center border-b-4 cursor-pointer">
          <button onClick={() => signIn()}>로그인</button>
        </li>
      )}
    </ul>
  );
};

export default NavItem;
