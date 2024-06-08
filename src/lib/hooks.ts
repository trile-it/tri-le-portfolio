import { useActiveSectionContext } from "@/context/active-section-context";
import { SectionName } from "@/lib/types";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export function useSectionInView(sectionName: SectionName, amount = 0.75) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (isInView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [isInView, sectionName, setActiveSection, timeOfLastClick]);

  return {
    ref,
    isInView
  }
}
