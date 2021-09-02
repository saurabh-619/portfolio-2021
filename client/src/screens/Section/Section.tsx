import React, { useEffect } from 'react';
import { SectionProps } from '../../types';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const Section: React.FC<SectionProps> = ({ sectionTitle }) => {
  const { ref, inView } = useInView();
  const animate = useAnimation();
  const animateBorderedTextLeft = useAnimation();
  const animateBorderedTextRight = useAnimation();

  // const wrapperAnimation = {
  //   hidden: { y: 500 },
  //   show: { y: 0, transition: { duration: 2 } },
  // };

  useEffect(() => {
    if (inView) {
      animate.start({
        y: 0,
        opacity: 1,
        transition: { duration: 1, delay: 0.4 },
      });
      animateBorderedTextLeft.start({
        x: '-100%',
        transition: { duration: 0.7, delay: 1 },
      });
      animateBorderedTextRight.start({
        x: '100%',
        transition: { duration: 0.7, delay: 1 },
      });
    }
  }, [inView]);

  return (
    <motion.div
      id="section"
      className="container snap"
      animate={animate}
      initial={{ y: 300, opacity: 0 }}
    >
      <motion.h1 className="font-section160-B left" animate={animateBorderedTextLeft}>
        {sectionTitle}
      </motion.h1>
      <h1 className="font-section160-B center">{sectionTitle}</h1>
      <motion.h1 className="font-section160-B right" ref={ref} animate={animateBorderedTextRight}>
        {sectionTitle}
      </motion.h1>
    </motion.div>
  );
};
