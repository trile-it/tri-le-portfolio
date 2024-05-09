"use client"

import { motion } from "framer-motion";
import React from 'react';

function Header() {
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
    </header>
  );
}

export default Header;
