import Link from "next/link";
import { useEffect, useState } from "react";

function Header() {
  return (
    <header className="flex justify-between p-3 max-w-7xl mx-auto  bg-gray-50">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="w-44 object-contain cursor-pointer"
            src="/Motive.png"
            alt="Motive Logo"
          />
        </Link>
        <div className="hidden md:inline-flex items-center space-x-5 text-stone-950">
          <h3>About</h3>
          <h3>Contact</h3>
        </div>
      </div>
      <div className="flex items-center space-x-5 text-stone-950">
        <h3>Sign In</h3>
        <h3>Sign Out</h3>
        {/* {!isLoggedIn ? (
          <Link href="/login">
            
          </Link>
        ) : (
          
        )} */}

        {/* <h3 className="border px-4 py-1 rounded-full border-slate-400"> */}
        {/* {!isLoggedIn ? "Get Started" : user?.email} */}
        {/* </h3> */}
      </div>
    </header>
  );
}

export default Header;
