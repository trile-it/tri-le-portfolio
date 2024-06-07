"use client"

import SectionHeading from "@/components/section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import React from 'react';
import { FaPaperPlane } from "react-icons/fa";

function Contact() {
  const { ref } = useSectionInView("Contact", 0.3);

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="w-[min(100%,38rem)] mb-20 sm:mb-28 text-center scroll-mt-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a
          className="underline"
          href="mailto:minhtrile.it@gmail.com"
        >
          minhtrile.it@gmail.com
        </a>{" "} or through this form.
      </p>
      <form className="flex flex-col mt-10">
        <input
          className="h-14 px-4 rounded-lg borderBlack"
          type="email"
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 p-4 rounded-lg borderBlack"
          placeholder="Your message"
        />
        <button
          className="
            flex justify-center items-center gap-2 self-end
            h-[3rem] w-[8rem]
            bg-gray-900 text-white
            rounded-full outline-none
            transition-all
            focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105
            group
          "
          type="submit"
        >
          Submit
          <FaPaperPlane
            className="
              text-xs opacity-70
              transition-all
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
          />
        </button>
      </form>
    </motion.section>
  );
}

export default Contact;
