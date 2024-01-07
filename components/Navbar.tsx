"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import Button from "./resuable/Button";

export default function Navbar() {
  const [open, setIsOpen] = useState<boolean>(false);
  const Links = ["Home", "Carrers", "About", "Security"];
  const handleClick = () => {
    setIsOpen(!open);
  };
  return (
    <nav className="bg-glass relative nav-border my-10 py-4 text-white lg:max-w-[1300px] lg:mx-auto mx-5">
      <section className="px-10 flex items-center justify-between">
        <Link className="flex items-center gap-5 justify-center" href="/">
          <Image src="/images/logo.svg" width={40} height={40} alt="logo" />
          <p className="font-bold">SimpleBank</p>
        </Link>
        <div onClick={handleClick} className="cursor-pointer lg:hidden flex">
          <HiMenuAlt3 size={25} />
        </div>
        {/* mobile design */}
        {open && (
          <div className="absolute lg:hidden flex top-20 right-2 rounded-xl py-4 bg-glass">
            <div className="flex flex-col items-center justify-center px-14">
              <div className="flex flex-col items-center justify-center gap-5">
                {Links?.map((link) => (
                  <p className="cursor-pointer" key={link}>
                    {link}
                  </p>
                ))}
              </div>
              <div className="flex flex-col items-center justify-center">
                <Button className="bg-transparent text-white">Sign Up</Button>
                <Button className="py-2 px-6 rounded-2xl">Login</Button>
              </div>
            </div>
          </div>
        )}
        <div className="lg:flex hidden items-center justify-center gap-5">
          {Links?.map((link) => (
            <p className="cursor-pointer" key={link}>
              {link}
            </p>
          ))}
        </div>
        <div className="lg:flex hidden">
          <Button className="bg-transparent text-white">Sign Up</Button>
          <Button className="py-2 px-6 rounded-2xl">Login</Button>
        </div>
      </section>
    </nav>
  );
}
