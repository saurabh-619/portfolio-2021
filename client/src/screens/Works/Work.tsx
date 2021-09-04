import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { TechnologiesEnum, WorkType } from '../../types';
import {
  fadeUpAnimation,
  headingAnimation,
  imageAnimation,
  staggerTransition,
  staggerWrapper,
  workImageAnimation,
} from '../../utills/animations';
import { dot } from '../../utills/constants';
import { useInView } from 'react-intersection-observer';

export const Work: React.FC<WorkType> = ({
  id,
  name,
  desc,
  technologies,
  bgImageUrl,
  mockupUrl,
  url,
  bgColor,
}) => {
  const { ref, inView } = useInView();

  const imageController = useAnimation();
  const wrapperController = useAnimation();
  const numController = useAnimation();

  const { initial, animate } = workImageAnimation(0.85, 2.5, 1);

  useEffect(() => {
    if (inView) {
      imageController.start({ ...animate, scale: 0.9 });
      wrapperController.start('animate');
      numController.start('animate');
    }
  }, [inView]);

  const headingVarient = headingAnimation(30, 0.4);

  const numberVarient = fadeUpAnimation(30, 0.4, 1);

  return (
    <div
      className="container work "
      style={{
        background: mockupUrl !== '' ? bgColor : `url(${bgImageUrl})`,
      }}
    >
      {mockupUrl && (
        <motion.img
          src={mockupUrl}
          alt="mockupUrl"
          className="mockupImg"
          initial={initial}
          animate={imageController}
        />
      )}
      <div className="content">
        <motion.div
          className="left"
          variants={staggerWrapper()}
          initial="initial"
          animate={wrapperController}
        >
          <motion.a
            className="name font-h160-B"
            href={url}
            target="_blank"
            variants={headingVarient}
          >
            {name}
          </motion.a>
          <motion.h3 className="desc font-main20-R" variants={headingVarient} ref={ref}>
            {desc}
          </motion.h3>
          <motion.div className="technologies" transition={staggerTransition()}>
            {technologies.map((tech: TechnologiesEnum, index) => (
              <motion.div key={index} className="tech" variants={headingVarient}>
                <img src={dot} alt="dot" className="dot" />
                <div className="title font-medium17-M">{tech.split('~')[1]}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          className="right font-brand160-B"
          variants={numberVarient}
          initial="initial"
          animate={numController}
        >
          {id}
        </motion.div>
      </div>
    </div>
  );
};
