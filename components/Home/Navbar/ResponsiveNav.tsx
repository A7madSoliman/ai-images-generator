"use client";

import React, { useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

function ResponsiveNav() {
  const [showNav, setShowNav] = useState(false);

  const openNav = () => {
    setShowNav(true);
  };
  const closeNav = () => {
    setShowNav(false);
  };

  return (
    <div>
      <Nav openNav={openNav} />
      <MobileNav closeNav={closeNav} showNav={showNav} />
    </div>
  );
}

export default ResponsiveNav;
