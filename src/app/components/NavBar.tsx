"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./NavItem";
import { User } from "@prisma/client";

type props = {
  currentUser?: User | null;
};
const NavBar = ({ currentUser }: props) => {
  const [menu, setmenu] = useState(false);
  return (
    <nav className="relative z-10 w-full text-white bg-orange-500">
      <div className="flex items-center justify-between mx-5 sm:mx-10 lg:mx-20">
        <div className="flex items-center text-2xl h-14">
          <Link href="/">로고</Link>
        </div>
        <div className="text-2xl sm:hidden">
          {menu === false ? (
            <button onClick={() => setmenu(!menu)}>+</button>
          ) : (
            <button onClick={() => setmenu(!menu)}>-</button>
          )}
        </div>
        <div className="hidden sm:block">
          <NavItem currentUser={currentUser} />
        </div>
      </div>
      <div className="block sm:hidden">
        {menu && <NavItem mobile currentUser={currentUser} />}
      </div>
    </nav>
  );
};

export default NavBar;
