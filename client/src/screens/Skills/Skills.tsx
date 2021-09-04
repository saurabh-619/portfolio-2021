import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { getIconFromTech } from '../../utills/common';
import { skills } from '../../utills/constants';
import { useWindowSize } from '../../utills/useWindowSize';

export const Skills = () => {
  const {height, width } = useWindowSize();
  const [factors, setFactors] = useState({
    left: 400,
    top: 200,
  });

  const getFactors = (widthOfScreen: number) => {  
    if (widthOfScreen > 1200) {
      return setFactors({
        left: widthOfScreen/4,
        top: widthOfScreen/8,
      });
    } else if (1150 < widthOfScreen && widthOfScreen <= 1250) {
      return setFactors({
        left: widthOfScreen/4,
        top: widthOfScreen/6,
      });
    } else if (1000 < widthOfScreen && widthOfScreen <= 1150) {
      return setFactors({
        left: widthOfScreen/4,
        top: widthOfScreen/5.5,
      });
    } else if (850 < widthOfScreen && widthOfScreen <= 1000) {
      return setFactors({
        left: widthOfScreen/4.2,
        top: widthOfScreen/4.7,
      }); 
    } else if (720 < widthOfScreen && widthOfScreen <=850) {
      return setFactors({
        left: widthOfScreen/4.2,
        top: widthOfScreen/4,
      });
    } else if (550 < widthOfScreen && widthOfScreen <=720) {
      return setFactors({
        left: widthOfScreen/4.5,
        top: widthOfScreen/3.2,
      });
    }else {
      return setFactors({
        left: widthOfScreen/5.5,
        top: widthOfScreen/3,
      }); 
    } 
  };

  useEffect(() => {
    getFactors(width);
  }, [width]);

 
 
 
  return (
    <div id="skills" className="snap"  >
      {skills?.map((skill: string, index) => (
        <div
          key={index}
          className="skill"
           style={{
            left:
              factors?.left * (index % 4) +
              ((index / 4) % 2) * 80 +
              30 +
              53.56123 * (Math.random() - 0.5) * 2,
            top:
              factors?.top * Math.floor(index / 4) +
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
