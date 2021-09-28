import React, { useEffect } from 'react';
import { SectionProps } from '../../types';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { transitions } from '../../utills/animations';

export const Section: React.FC<SectionProps> = ({ sectionTitle }) => {
  const { ref, inView } = useInView();
  const animate = useAnimation();

  useEffect(() => {
    if (inView) {
      animate.start('animate');
    }
  }, [inView]);

  const animateVariant = {
    initial: { y: 300, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, delayChildren: 1 },
    },
  };

  const leftVariant = {
    initial: { opacity: 0 },
    animate: {
      x: '-100%',
      opacity: [0, 0.2, 0.3, 0.8, 1],
      transition: { ...transitions, duration: 0.7 },
    },
  };

  const rightVariant = {
    initial: { opacity: 0 },
    animate: {
      x: '100%',
      opacity: [0, 0.2, 0.3, 0.8, 1],
      transition: { ...transitions, duration: 0.7 },
    },
  };

  return (
    <div id={`section-${sectionTitle}`} className="container snap section">
      <motion.div
        className="title-wrapper"
        variants={animateVariant}
        initial="initial"
        animate={animate}
      >
        <motion.h1 className="font-section160-B left" variants={leftVariant}>
          {sectionTitle}
        </motion.h1>
        <motion.h1 className="font-section160-B center" ref={ref}>
          {sectionTitle}
        </motion.h1>
        <motion.h1 className="font-section160-B right" variants={rightVariant}>
          {sectionTitle}
        </motion.h1>
      </motion.div>
    </div>
  );
};
