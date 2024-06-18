"use client"

import SectionHeading from "@/components/section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import React, { useEffect, useState } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
  VerticalTimelineElementProps
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Experience() {
  const VTimelineElement = WrappedVerticalTimelineElement(VerticalTimelineElement);

  return (
    <section
      id="experience"
      className="scroll-mt-28 mb-28 sm:mb-40"
    >
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="#e5e7ed">
        {
          experiencesData.map((item, index) => (
            <React.Fragment key={index}>
              <VTimelineElement
                contentStyle={{
                  background: "#f3f4f6",
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem"
                }}
                contentArrowStyle={{
                  borderRight: "0.4rem solid #9ca3af"
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background: "white",
                  fontSize: "1.5rem",
                }}
              >
                <h3 className="font-semibold capitalize">{item.title}</h3>
                <p className="font-normal !mt-0">{item.location}</p>
                <p className="!mt-1 !font-normal text-gray-700">{item.description}</p>
              </VTimelineElement>
            </React.Fragment>
          ))
        }
      </VerticalTimeline>
    </section>
  );
}

type WrappedVerticalTimelineElementProps = {
  children: React.ReactNode,
} & VerticalTimelineElementProps;

// By default, there is some errors that make VerticalTimelineElement hidden
// Rather than using one useSectionInView hook in Experience Component above and show all the Timeline Elements at once
// Each Wrapped Component will handle its visibility independently when it is in view
const WrappedVerticalTimelineElement = (VerticalTimelineElm: typeof VerticalTimelineElement) =>
  function AutoVisibleVerticalTimelineElement({ children, ...props }: WrappedVerticalTimelineElementProps) {
    const { ref, isInView } = useSectionInView("Experience", 0.3);
    const [firstInView, setFirstInView] = useState(false);

    useEffect(() => {
      if (!firstInView && isInView) {
        setFirstInView(true);
      }
    }, [firstInView, isInView]);

    return (
      <VerticalTimelineElm
        visible={firstInView} // After being in view the first time, always be visible subsequently
        {...props}
      >
        <div ref={ref}>
          {children}
        </div>
      </VerticalTimelineElm>
    )
  }
