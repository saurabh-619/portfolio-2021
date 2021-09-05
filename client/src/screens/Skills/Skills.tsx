 
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
    }else if (405 < widthOfScreen && widthOfScreen <=550) {
      return setFactors({
        left: widthOfScreen/2.9,
        top: widthOfScreen/2.85,
      });  
    }else {
      return setFactors({
        left: widthOfScreen/3,
        top: widthOfScreen/2.6,
      }); 
    } 
  };

  useEffect(() => {
    getFactors(width);
  }, [width]);
 

  const handleMouseOver = (e: any) => {
    document.querySelectorAll('.skill').forEach((layer) => {
      const speed = layer.getAttribute('data-speed');
      const x = (width! - (e.clientX * speed)) / 200;
      const y = (height! - (e.clientY * speed)) / 200;

      layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    })
  }
  
  const mobileAligns = (index:number) => { 
    return {
      left:
        factors?.left * (index % 3) +
          ((index / 3) % 2) * 20 +
          20 +
          20.56123 * (Math.random() - 0.5) * 2,
      top:
        factors?.top * Math.floor(index / 3) +
        ((index / 3) % 2) *5 +
        15 +
        45.34 * (Math.random() - 0.5) * 1.59,
    }
  }
 
  
  const largeAligns = (index:number) => {
    return {
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
    }
  }
 
  return (   
    <div id="skills" className="snap" onMouseMove={handleMouseOver} >
      {skills?.map((skill: string, index) => (
        <div
          key={index}
          className="skill"
          data-speed={Math.ceil((Math.random()-.5)*15)}
           style={ 
             width! > 850 ? largeAligns(index): mobileAligns(index)
          }
        >
          <img src={getIconFromTech(skill)} alt="Skill" className="skill-img" />
        </div>
      ))}
    </div>
  );
};
