import React from 'react';
import { SectionProps } from '../../types';

export const Section: React.FC<SectionProps> = ({ sectionTitle }) => {
  return (
    <div id="section" className="container snap">
      <h1 className="font-section160-B left">{sectionTitle}</h1>
      <h1 className="font-section160-B center">{sectionTitle}</h1>
      <h1 className="font-section160-B right">{sectionTitle}</h1>
    </div>
  );
};
