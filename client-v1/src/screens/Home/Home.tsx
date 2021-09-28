import { motion } from "framer-motion"
import React from "react"
import {
  fadeUpAnimation,
  imageAnimation,
  transitions,
} from "../../utills/animations"
import { saurabhImg } from "../../utills/constants"

const firstNameAnimation = {
  animate: {
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.07,
      staggerDirection: 1,
    },
  },
}

const lastNameAnimation = {
  animate: {
    transition: {
      delayChildren: 1.5,
      staggerChildren: 0.07,
      staggerDirection: 1,
    },
  },
}

const letterAnimation = {
  initial: {
    y: 30,
    opacity: 0,
  },
  animate: { y: 0, opacity: 1, transition: { ...transitions, duration: 1 } },
}

const scrollDownAnimation = {
  animate: {
    y: -15,
    transition: { yoyo: Infinity, duration: 1.5 },
  },
}

export const Home = () => {
  return (
    <div id="home" className="container snap">
      <div className="wrapper">
        <div className="left">
          <div className="content">
            <div className="name-wrappper">
              <motion.div
                variants={firstNameAnimation}
                initial="initial"
                animate="animate"
                className="name-wrappper-top"
              >
                <motion.div
                  variants={letterAnimation}
                  className="font-sbbrand name"
                >
                  s
                </motion.div>
                <motion.div
                  variants={letterAnimation}
                  className="font-sbbrand name"
                >
                  a
                </motion.div>
                <motion.div
                  variants={letterAnimation}
                  className="font-sbbrand name"
                >
                  u
                </motion.div>
                <motion.div
                  variants={letterAnimation}
                  className="font-sbbrand name"
                >
                  r
                </motion.div>
                <motion.div
                  variants={letterAnimation}
                  className="font-sbbrand name"
                >
                  a
                </motion.div>
                <motion.div
                  variants={letterAnimation}
                  className="font-sbbrand name"
                >
                  b
                </motion.div>
                <motion.div
                  variants={letterAnimation}
                  className="font-sbbrand name"
                >
                  h
                </motion.div>
              </motion.div>
              <br />
              <motion.div
                variants={lastNameAnimation}
                initial="initial"
                animate="animate"
                className="name-wrappper-bottom"
              >
                <motion.div
                  variants={letterAnimation}
                  className="font-sbbrand name"
                >
                  b
                </motion.div>
                <motion.div
                  variants={letterAnimation}
                  className="font-sbbrand name"
                >
                  o
                </motion.div>
                <motion.div
                  variants={letterAnimation}
                  className="font-sbbrand name"
                >
                  m
                </motion.div>
                <motion.div
                  variants={letterAnimation}
                  className="font-sbbrand name"
                >
                  b
                </motion.div>
                <motion.div
                  variants={letterAnimation}
                  className="font-sbbrand name"
                >
                  l
                </motion.div>
                <motion.div
                  variants={letterAnimation}
                  className="font-sbbrand name"
                >
                  e
                </motion.div>
              </motion.div>
            </div>
            <motion.div
              className="font-intro24-R caption"
              variants={fadeUpAnimation()}
              initial="initial"
              animate="animate"
            >
              UI Designer and Software Developer
            </motion.div>
          </div>
          <motion.div
            className="scroll1"
            variants={scrollDownAnimation}
            initial="initial"
            animate="animate"
          >
            <h4 className="font-caption15-R"> scroll down</h4>
            <div className="down-border"></div>
          </motion.div>
        </div>
        <div className="right">
          <motion.img
            src={saurabhImg}
            alt="saurabhImg"
            variants={imageAnimation()}
            initial="initial"
            animate="animate"
          />
          <motion.div
            className="scroll2"
            variants={scrollDownAnimation}
            initial="initial"
            animate="animate"
          >
            <a
              className="font-caption15-R"
              href="mailto:saurabhbomble1011@gmail.com"
            >
              saurabhbomble1011@gmail.com
            </a>
            <div className="down-border"></div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
