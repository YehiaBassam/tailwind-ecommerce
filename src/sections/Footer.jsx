import React from "react";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
      <div>
        <img src={footerLogo} alt="logo" className="h-8" />
        <p className="text-white my-5 leading-8">
          Get shoes ready for the new term at your nearest Nike store. Find Your
          perfect Size in Store. Get Rewards
        </p>
        <div className="flex gap-5">
          {socialMedia.map((s, i) => (
            <div
              key={i}
              className="bg-white w-12 h-12 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={s.src} alt={s.alt} />
            </div>
          ))}
        </div>
      </div>

      {footerLinks.map((link, i) => (
        <div className="text-white" key={i}>
          <p className="text-2xl font-semibold mb-5">{link.title}</p>
          <ul className="flex flex-col gap-2">
            {link.links.map((l, j) => (
              <li key={j} className="hover:text-neutral-500">
                <a href={l.link}>
                  {l.name}
                </a>
              </li>
            ))}
          </ul>

        </div>
      ))}

      <div>

      </div>
    </footer>
  );
};

export default Footer;
