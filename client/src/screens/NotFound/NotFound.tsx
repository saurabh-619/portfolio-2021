import { motion } from 'framer-motion';
import React from 'react';
import { Link } from '@reach/router';
import { fadeUpAnimation, staggerWrapper, transitions } from './../../utills/animations';

const letterAnimation = {
  initial: {
    y: 30,
    opacity: 0,
  },
  animate: { y: 0, opacity: 1, transition: { ...transitions, duration: 1 } },
};

const firstNameAnimation = {
  animate: {
    transition: { staggerChildren: 0.07, staggerDirection: 1 },
  },
};

export const NotFound = () => {
  return (
    <div id="notfound">
      <motion.div
        className="wrapper"
        variants={staggerWrapper(0, 1)}
        initial="initial"
        animate="animate"
      >
        <motion.div variants={firstNameAnimation} className="name-wrapper">
          <motion.div variants={letterAnimation} className="font-sbbrand name">
            4
          </motion.div>
          <motion.div variants={letterAnimation} className="font-sbbrand name">
            0
          </motion.div>
          <motion.div variants={letterAnimation} className="font-sbbrand name">
            4
          </motion.div>
        </motion.div>
        <motion.div className="main-text" variants={fadeUpAnimation(undefined, 1, 1)}>
          You seem lost!
        </motion.div>
        <motion.div className="button-wrapper" variants={fadeUpAnimation(undefined, 3, 1.5)}>
          <Link to="/" className="button">
            Take me Home!
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};
