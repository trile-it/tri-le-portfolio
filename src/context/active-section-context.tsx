"use client"

import { links } from "@/lib/data";
import React, { createContext, useContext, useState } from 'react';

type SectionName = typeof links[number]["name"];

type ActiveSectionContextProviderProps = {
  children: React.ReactNode,
};

type ActiveSectionContextType = {
  activeSection: SectionName,
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>,
  timeOfLastClick: number,
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>,
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({ children }: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  // We need to keep track of this time to disable the view observer temporarily when user clicks on a header link
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
}
