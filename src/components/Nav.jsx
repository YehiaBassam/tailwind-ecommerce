import React from "react";
import headerLogo from "../assets/images/header-logo.svg";
import hamburger from "../assets/icons/hamburger.svg";
import { navLinks } from "../constants/index.js";

const Nav = () => {
  return (
    <header className="absolute w-full padding-x py-8 z-10">
      <nav className="max-container grid grid-cols-[auto_1fr_auto] items-center gap-4">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} />
        </a>

        <ul className="md:flex hidden justify-center gap-16">
          {navLinks.map((link, i) => (
            <li key={i}>
              <a
                href={link.href}
                className="text-secondary font-montserrat text-lg max-lg:text-sm"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <img
          className="hidden max-md:block ml-auto"
          src={hamburger}
          alt="hamburger menu"
          width={30}
        />
      </nav>
    </header>
  );
};

export default Nav;
