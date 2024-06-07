"use client"

import { useActiveSectionContext } from "@/context/active-section-context";
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from "next/link";
import React, { useEffect, useRef } from 'react';
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

function Intro() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (isInView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Home");
    }
  }, [isInView, setActiveSection, timeOfLastClick]);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex justify-center items-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=368&h=368&q=100"
              alt="Ricardo portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Trey.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">3 years</span> of experience. I enjoy building{" "}
        <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>

      <motion.div
        className="
          flex flex-col sm:flex-row justify-center items-center gap-2 px-4
          text-lg font-medium
        "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="
            flex items-center gap-2 px-7 py-3
            text-white bg-gray-900
            rounded-full outline-none
            focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition
            group
          "
        >
          Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a className="
          flex items-center gap-2 px-7 py-3
          bg-white
          rounded-full outline-none border border-black/10
          focus:scale-110 hover:scale-110 active:scale-105 transition
          group
          cursor-pointer
        "
           href="https://drive.google.com/file/d/160v7jwWMfZJvwgg67OQtUNAT8wpIVVm2/view?usp=sharing"
           target="_blank"
        >
          My Resume <BsArrowRight className="opacity-60 group-hover:translate-x-1 transition" />
        </a>

        <a className="
          flex items-center gap-2 p-4
          text-gray-700 bg-white
          rounded-full border border-black/10
          focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition
          cursor-pointer
        "
           href="https://linkedin.com/in/trile-it/"
           target="_blank"
        >
          <BsLinkedin />
        </a>

        <a className="
          flex items-center gap-2 p-4
          text-[1.35rem]
          text-gray-700 bg-white
          rounded-full border border-black/10
          focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition
          cursor-pointer
        "
           href="https://github.com/trile-it"
           target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}

export default Intro;
