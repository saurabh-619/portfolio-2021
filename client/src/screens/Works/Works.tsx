import React from 'react';
import { worksData } from './data';
import { WorkType } from './../../types';
import { Work } from './Work';

const Works = () => {
  return (
    <div id="works">
      {worksData.map((work: WorkType) => (
        <Work {...work} />
      ))}
    </div>
  );
};

export default Works;
