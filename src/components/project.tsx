"use client"

import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

type ProjectProps = typeof projectsData[number];

function Project({ title, description, projectUrl, demoUrl, tags, imageUrl }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"]
  });
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <motion.div
      ref={ref}
      className="mb-3 sm:mb-8 last:mb-0 group"
      style={{
        opacity: opacityProgress,
        scale: scaleProgress
      }}
    >
      <section
        className="
          relative
          max-w-[42rem]
          sm:h-[20rem]
          sm:pr-5
          border border-black/5 rounded-lg
          bg-gray-100
          overflow-hidden
          group-even:pl-8
          hover:bg-gray-200 transition
        "
      >
        <div
          className="
          flex flex-col
          sm:max-w-[50%]
          h-full
          pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10
          group-even:ml-[18rem]
        "
        >
          <h3 className="text-2xl font-semibold">
            {projectUrl ? (
              <a
                className="underline text-blue-500"
                href={projectUrl}
                target="_blank"
              >
                {title}
              </a>
            ) : title}
          </h3>
          <p className="mt-2 leading-relaxed text-gray-700">
            {description}{" "}
            {demoUrl ? (
              <a
                className="underline italic text-blue-500"
                href={demoUrl}
                target="_blank"
              >
                Watch Demo
              </a>
            ) : null}
          </p>
          <ul className="flex flex-wrap gap-2 mt-4 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="
                px-3 py-1
                text-[0.7rem] text-white
                uppercase tracking-wider
                bg-black/[0.7]
                rounded-full
              "
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          className="
          absolute top-8 -right-40
          w-[28.25rem]
          rounded-t-lg shadow-2xl
          group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04] transition
          group-even:right-[initial] group-even:-left-40
          group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2
        "
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
        />
      </section>
    </motion.div>
  );
}

export default Project;
