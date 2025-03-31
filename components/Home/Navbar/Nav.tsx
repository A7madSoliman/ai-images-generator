import { Navlinks } from "@/constant/constant";
import { MenuIcon, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <div
      className="flex items-center justify-between h-[12vh] fixed z-[100] w-full
     mx-auto transition-all duration-200"
    >
      <h1 className="text-3xl text-white font-bold ml-8 md:ml-16">IMGIAI</h1>

      <div className=" md:flex items-center space-x-10 hidden">
        {Navlinks.map((link) => {
          return (
            <Link
              key={link.id}
              href={link.url}
              className="relative text-white text-base w-fit block after:block after:content-[''] after:absolute
               after:w-full after:h-[2px] after:bg-amber-400 after:scale-x-0 after:transition after:duration-300
                hover:after:scale-x-100"
            >
              <p> {link.label}</p>
            </Link>
          );
        })}
      </div>

      <div className="flex items-center text-white space-x-5 md:space-x-8 mr-8 md:mr-16">
        <ShoppingCart className="cursor-pointer w-6 h-6" />
        <Search className="cursor-pointer w-6 h-6" />
        <MenuIcon className="cursor-pointer w-6 h-6 md:hidden" />
      </div>
    </div>
  );
}

export default Nav;
