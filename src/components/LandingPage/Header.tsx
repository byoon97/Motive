import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";

function Header() {
  return (
    <header className="flex justify-between p-3 max-w-7xl mx-auto">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="w-44 object-contain cursor-pointer"
            src="/Motive.png"
            alt="Motive Logo"
          />
        </Link>
      </div>
      <div className="flex items-center space-x-5 text-stone-950">
        <div className="border-[1px] border-black text-xs font-bold px-2 py-1 hover:bg-gray-200 cursor-pointer">
          Become a host
        </div>
        <div className="flex flex-row items-center justify-evenly w-16  h-8 px-2 rounded-md py-1 hover:bg-gray-200 cursor-pointer">
          <RxHamburgerMenu className="text-xl" />
          <CgProfile className="text-xl" />
        </div>
      </div>
    </header>
  );
}

export default Header;
