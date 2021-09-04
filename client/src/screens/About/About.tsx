import React, { useEffect } from 'react';
import { avatarImg, glassGreenBallSvg, glassRedBallSvg } from '../../utills/constants';

import { ArrowDownCircle, MapPin } from 'react-feather';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import {
  pageTitleAnimation,
  staggerTransition,
  staggerWrapper,
  transitions,
} from '../../utills/animations';

export const About = () => {
  const { ref, inView } = useInView();

  const wrapperController = useAnimation();
  const cardWrapper = useAnimation();

  useEffect(() => {
    if (inView) {
      wrapperController.start('animate');
      cardWrapper.start('animate');
    }
  }, [inView]);

  const fadeUpAnimation = (duration = 0.8) => ({
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

  const paraTagAnimation = {
    initial: {
      x: -50,
      opacity: 0,
    },
    animate: {
      x: -10,
      opacity: 1,
      transition: { ...transitions, duration: 0.8 },
    },
  };

  return (
    <motion.div
      id="about"
      className="container snap top-heading-padding"
      variants={staggerWrapper(0, 1)}
      initial="initial"
      animate={wrapperController}
      ref={ref}
    >
      <div className="green-blurred-ball"></div>
      <motion.h2 className="font-brand90-B" variants={pageTitleAnimation(undefined, 1)}>
        whoami
      </motion.h2>
      <motion.div className="content-wrapper">
        <motion.div className="left" transition={staggerTransition(0.4)}>
          <motion.h6 className="font-contact-tags tags" variants={paraTagAnimation}>
            {'<p>'}
          </motion.h6>
          <motion.div className="content" variants={{}} transition={staggerTransition(0.3)}>
            <motion.p className="font-medium17-R" variants={fadeUpAnimation()}>
              Hi, <span className="title font-intro24-B"> I'M SAURABH BOMBLE</span>
            </motion.p>
            <motion.p className="main-text font-medium17-M" variants={fadeUpAnimation()}>
              Software designer and developer based in Pune, India. I am currently in my final year
              of computer engineering and have a strong interest in UI design, animations, and
              software development.
            </motion.p>
            <motion.p className="main-text font-medium17-M" variants={fadeUpAnimation()}>
              I began learning coding back in 2019 with web development and have enjoyed working on
              both frontend and backend parts since then. Currently, I'm concentrating on the
              performance, scalability, and UI/UX aspects of apps.
            </motion.p>
          </motion.div>
          <motion.h6 className="font-contact-tags tags" variants={paraTagAnimation}>
            {'</p>'}
          </motion.h6>
        </motion.div>
        <motion.div
          className="right"
          variants={staggerWrapper(0, 5)}
          initial="initial"
          animate={cardWrapper}
        >
          <motion.div className="card" variants={fadeUpAnimation(4)}>
            <motion.div className="glass" variants={{}}>
              <motion.div className="header" variants={{}}>
                <motion.div
                  className="text"
                  variants={{}}
                  transition={{ delayChildren: 1.5, staggerChildren: 0.7 }}
                >
                  <motion.h3 className="font-glass-name" variants={fadeUpAnimation()}>
                    SAURABH ANAND BOMBLE
                  </motion.h3>
                  <motion.h4 className="font-medium17-R" variants={fadeUpAnimation()}>
                    UI/UX designer & Software developer
                  </motion.h4>
                </motion.div>
                <img src={avatarImg} alt="avatar-img" className="avatar-img" />
              </motion.div>
              <motion.div
                className="links"
                variants={{}}
                transition={{ delayChildren: 2.5, staggerChildren: 0.7 }}
              >
                <motion.div className="location" variants={fadeUpAnimation()}>
                  <span>
                    <MapPin size="25" />
                  </span>
                  <h3 className="font-main20-R">Pune, India</h3>
                </motion.div>
                <motion.a className="resume" href="" variants={fadeUpAnimation()}>
                  <h3 className="font-main20-B">resume</h3>
                  <span>
                    <ArrowDownCircle size="25" />
                  </span>
                </motion.a>
              </motion.div>
            </motion.div>

            <img src={glassRedBallSvg} alt="glass" className="red-ball" />
            <img src={glassGreenBallSvg} alt="glass" className="green-ball" />
          </motion.div>
        </motion.div>
      </motion.div>
      <div className="red-blurred-ball"></div>
    </motion.div>
  );
};
