import React from 'react';
import { worksData } from './data';
import { WorkType } from './../../types';
import { Work } from './Work';

export const Works = () => {
  return (
    <div id="works">
      {worksData.map((work: WorkType) => (
        <Work key={work.id} {...work} />
      ))}
    </div>
  );
};
