"use client"

import { motion } from 'framer-motion';
import React from 'react';

function SectionDivider() {
  return (
    <motion.div
      className="
        hidden sm:block
        h-16 w-1 my-24 rounded-full
        bg-gray-200
      "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    ></motion.div>
  );
}

export default SectionDivider;
