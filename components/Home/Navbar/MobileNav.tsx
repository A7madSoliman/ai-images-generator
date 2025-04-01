import { Navlinks } from "@/constant/constant";
import { XIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {
  closeNav: () => void;
  showNav: boolean;
};

function MobileNav({ closeNav, showNav }: Props) {
  const navOpen = showNav ? "translate-y-0" : "translate-y-[-200%]";

  return (
    <div>
      <div
        className={`text-white ${navOpen} fixed flex flex-col h-screen justify-center
       z-[1050] bg-gray-950 transfrom duration-1000 transition-all w-full space-y-6 
       top-0`}
      >
        {Navlinks.map((link) => {
          return (
            <Link key={link.id} href={link.url}>
              <p
                className="text-white w-fit text-xl ml-12 border-b-[1.5px]
               border-white sm:text-[30px]"
              >
                {" "}
                {link.label}
              </p>{" "}
            </Link>
          );
        })}

        <XIcon
          onClick={closeNav}
          className="absolute top-[1.7rem] right-[1.7rem] w-8 h-8 cursor-pointer"
        />
      </div>
    </div>
  );
}

export default MobileNav;
