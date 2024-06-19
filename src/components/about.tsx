"use client"

import SectionHeading from "@/components/section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import React from 'react';

function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      id="about"
      className="max-w-[45rem] mb-28 sm:mb-32 text-center leading-8 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        After graduating with a bachelor's degree in{" "}
        <span className="font-medium">Computer Science</span>, I have held
        multiple software development roles in different international corporations.
        My first focus was mobile application development. However, after joining
        the first web project -
        <span className="font-medium italic">Smart Sensing Data Analysis</span>{" "}
        - I decided to pursue my passion in{" "}
        <span className="font-medium">full-stack web development</span>.
      </p>
      <p className="mb-3">
        <span className="italic">My favorite part of programming</span>{" "}
        is the problem-solving aspect. I <span className="underline">love</span>{" "}
        the feeling of finally figuring out a solution to a problem and seeing it
        come to life on the screen.
      </p>
      <p className="mb-3">
        My core stack is{" "}
        <span className="font-medium">
          React, Next.js, Node, MySQL, MongoDB, and AWS
        </span>
        . I am also <span className="underline">familiar</span> with{" "}
        <span className="font-medium italic">
          Agile Method, Python, and TypeScript
        </span>.
      </p>
      <p className="mb-3">
        I am always looking to learn new technologies and am currently seeking a{" "}
        <span className="underline">full-time</span>{" "}
        position as a <span className="font-medium italic">full-stack
        developer</span>.
      </p>
      <p className="hidden">
        <span className="italic">When I'm not coding</span>, I enjoy watching Youtube to{" "}
        <span className="font-medium">learn new things</span>. I am currently learning about{" "}
        <span className="font-medium">being a part-time Youtuber</span>.
      </p>
    </motion.section>
  );
}

export default About;
