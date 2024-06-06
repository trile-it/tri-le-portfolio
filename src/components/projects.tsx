import Project from "@/components/project";
import SectionHeading from "@/components/section-heading";
import { projectsData } from "@/lib/data";
import React, { useRef } from 'react';

function Projects() {
  return (
    <section id="projects" className="scroll-mt-28">
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
