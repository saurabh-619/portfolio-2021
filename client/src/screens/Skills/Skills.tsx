import React from 'react';
import { getIconFromTech } from '../../utills/common';
import { skills } from '../../utills/constants';

export const Skills = () => {
  return (
    <div id="skills" className="snap">
      {skills.map((skill: string, index) => (
        <div
          key={index}
          className="skill"
          style={{
            left:
              400 * (index % 4) +
              ((index / 4) % 2) * 80 +
              30 +
              53.56123 * (Math.random() - 0.5) * 2,
            top:
              200 * Math.floor(index / 4) +
              ((index / 4) % 2) * 10 +
              30 +
              23.3412312 * (Math.random() - 0.5) * 2,
          }}
        >
          <img src={getIconFromTech(skill)} alt="Skill" className="skill-img" />
        </div>
      ))}
    </div>
  );
};
