"use client"

import SectionHeading from "@/components/section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import React from 'react';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    }
  }),
};

function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="
        max-w-[53rem]
        mb-28 sm:mb-40
        scroll-mt-28
        text-center
      "
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {
          skillsData.map((skill, index) => (
            <motion.li
              key={index}
              className="bg-white border border-black/10 rounded-xl px-5 py-3"
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              {skill}
            </motion.li>
          ))
        }
      </ul>
    </section>
  );
}

export default Skills;
