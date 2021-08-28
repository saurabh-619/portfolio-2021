import React from 'react';
import { WorkType } from '../../types';

export const Work: React.FC<WorkType> = ({ id, name, desc, technology, bgImageUrl, url }) => {
  return <div className="work snap" style={{ backgroundImage: `url(${bgImageUrl})` }}></div>;
};
