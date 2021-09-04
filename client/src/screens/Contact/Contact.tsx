import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  fadeUpAnimation,
  imageAnimation,
  staggerTransition,
  staggerWrapper,
} from '../../utills/animations';
import { socialMediaLinks } from '../../utills/constants';
import { transitions } from './../../utills/animations';

export const Contact = () => {
  const { ref, inView } = useInView();

  const wrapperController = useAnimation();
  const imgController = useAnimation();

  useEffect(() => {
    if (inView) {
      wrapperController.start('animate');
      imgController.start('animate');
    }
  }, [inView]);

  const fadeUpAnimationNew = (duration = 0.8) => ({
    initial: {
      y: 30,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: { ...transitions, duration },
    },
  });

  return (
    <div id="contact" className="snap">
      <div className="content-wrapper">
        <motion.div
          className="container left top-heading-padding"
          initial="initial"
          variants={staggerWrapper(1, 0.6)}
          animate={wrapperController}
        >
          <motion.h2 className="font-brand90-B" variants={fadeUpAnimationNew()}>
            get in touch
          </motion.h2>
          <motion.div className="center" transition={staggerTransition(0.6)}>
            <motion.p className="font-h430-R" variants={fadeUpAnimationNew()}>
              I’m open to your ideas. I’m also interested in freelance opportunities. Let’s get
              connected and build something together!
            </motion.p>
            <motion.div className="social-icons" transition={staggerTransition(0.1)}>
              {socialMediaLinks.map((social: any, index) => (
                <motion.a
                  key={index}
                  className="social-icon"
                  href={`${index === 2 ? 'mailto:' : ''}${social[1]}`}
                  target="_blank"
                  variants={fadeUpAnimationNew(0.2)}
                >
                  <img src={social[0]} alt="social" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          <motion.div className="footer font-caption13-M" variants={fadeUpAnimationNew()} ref={ref}>
            <p>
              Designed and Developed by Saurabh Bomble @ {new Date().getFullYear()} All rights
              reserverd.
            </p>
          </motion.div>
        </motion.div>
        <div className="right">
          <motion.div
            className="img"
            initial="initial"
            variants={imageAnimation(1.4, 1.3, 0.5)}
            animate={imgController}
          ></motion.div>
        </div>
      </div>
    </div>
  );
};
