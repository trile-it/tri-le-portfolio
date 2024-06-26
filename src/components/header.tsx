"use client"

import { useActiveSectionContext } from "@/context/active-section-context";
import { links } from "@/lib/data";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import React from 'react';

function Header() {
  const {
    activeSection,
    setActiveSection,
    setTimeOfLastClick
  } = useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.div
        className="
          fixed top-0 left-1/2
          h-[4.5rem] w-full
          rounded-none
          border border-white/40
          bg-white/80
          shadow-lg shadow-black/[0.03]
          backdrop-blur-[0.5rem]
          sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full
        "
        initial={{ x: "-50%", y: -100, opacity: 0 }}
        animate={{ x: "-50%", y: 0, opacity: 1 }}
      ></motion.div>

      <nav
        className="
          flex
          fixed top-[0.15rem] left-1/2 -translate-x-1/2
          h-12
          py-2
          sm:top-[1.7rem] sm:h-[initial] sm:py-0
        ">
        <ul
          className="
            flex flex-wrap justify-center items-center gap-y-1
            w-[22rem]
            text-[0.9rem] font-medium text-gray-500
            sm:w-[initial] sm:flex-nowrap sm:gap-5
          "
        >
          {links.map(link => (
            <motion.li
              className="
                relative
                h-3/4
                flex justify-center items-center
              "
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex justify-center items-center",
                  "w-full px-3 py-3",
                  "hover:text-gray-950 transition",
                  {
                    "text-gray-950": activeSection === link.name
                  })}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
