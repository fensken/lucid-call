import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import MobileNavbar from "./MobileNavbar";
import { SignedIn, UserButton } from "@clerk/nextjs";

type NavbarProps = {};

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          width={32}
          height={32}
          alt="Lucid Logo"
          className="max-sm:size-10"
        />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          Lucid
        </p>
      </Link>

      <div className="flex-between gap-5 sm:gap-0">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>

        <MobileNavbar />
      </div>
    </nav>
  );
};

export default Navbar;
