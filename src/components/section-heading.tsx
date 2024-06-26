import React from 'react';

type SectionHeadingProps = {
  children: React.ReactNode,
}

function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="mb-8 text-3xl font-medium capitalize text-center">
      {children}
    </h2>
  );
}

export default SectionHeading;
