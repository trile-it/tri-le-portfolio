"use client"

import Project from "@/components/project";
import SectionHeading from "@/components/section-heading";
import { useActiveSectionContext } from "@/context/active-section-context";
import { projectsData } from "@/lib/data";
import { useInView } from "framer-motion";
import React, { useEffect, useRef } from 'react';

function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (isInView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Projects");
    }
  }, [isInView, setActiveSection, timeOfLastClick]);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {
          projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))
        }
      </div>
    </section>
  );
}

export default Projects;
