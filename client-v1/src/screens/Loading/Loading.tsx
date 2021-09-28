import React from "react"
import { motion } from "framer-motion"
import { transitions } from "../../utills/animations"
import { saurabhImg } from "../../utills/constants"

export const Loading = () => {
  const loadingVariant = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-100%",
      transition: {
        duration: 0.5,
      },
    },
  }

  const logoVariant = {
    initial: {
      y: 300,
      opacity: 0,
    },
    animate: {
      // y: 0,
      // opacity: 1,
      y: [0, 0, 0, -150],
      opacity: [1, 1, 1, 0],
      scale: [1, 1, 0.4, 0.4],
      transition: {
        ...transitions,
        duration: 1.2,
      },
    },
  }

  const curtainVarient = {
    initial: {},
    animate: {
      y: ["100%", "-100%"],
      height: ["100vh", "0vh"],
      transition: {
        ...transitions,
        duration: 3,
      },
    },
  }

  const pathVariant = {
    initial: {
      pathLength: 0,
      // opacity: 0,
    },
    animate: {
      pathLength: 1,
      // opacity: 1,
      transition: {
        ...transitions,
        delay: 5,
        duration: 0.8,
      },
    },
  }
  const wrapperVariant = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.5,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ...transitions,
        delay: 5,
        duration: 0.8,
      },
    },
  }

  return (
    <motion.div
      id="loading"
      variants={wrapperVariant}
      initial="initial"
      animate="animate"
    >
      <img src={saurabhImg} alt="saurabhImg" style={{ visibility: "hidden" }} />
      <motion.div className="color first" variants={loadingVariant}>
        <h3 className="loading-text">Loading</h3>
      </motion.div>
      <motion.div
        className="color second"
        variants={loadingVariant}
      ></motion.div>
      <motion.div
        className="color third"
        variants={loadingVariant}
      ></motion.div>
      <motion.div
        className="color fourth"
        variants={loadingVariant}
      ></motion.div>
      <motion.div className="logo" variants={{}}>
        <motion.div className="logo-wrapper" variants={logoVariant}>
          <motion.svg
            width="83"
            height="83"
            viewBox="0 0 83 83"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="logo-border"
            variants={{}}
          >
            <motion.circle
              cx="41.5"
              cy="41.5"
              r="38.5"
              stroke="#FF0B56"
              stroke-width="6"
            />
          </motion.svg>
          <motion.svg
            width="38"
            height="37"
            viewBox="0 0 38 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="logo-s"
            variants={{}}
          >
            <motion.path
              d="M13.8015 36.7C10.3348 36.7 7.41814 35.9333 5.05148 34.4C2.68481 32.8333 1.01814 30.7167 0.0514748 28.05L5.95147 24.6C7.31814 28.1667 10.0015 29.95 14.0015 29.95C15.9348 29.95 17.3515 29.6 18.2515 28.9C19.1515 28.2 19.6015 27.3167 19.6015 26.25C19.6015 25.0167 19.0515 24.0667 17.9515 23.4C16.8515 22.7 14.8848 21.95 12.0515 21.15C10.4848 20.6833 9.15148 20.2167 8.05148 19.75C6.98481 19.2833 5.90148 18.6667 4.80148 17.9C3.73481 17.1 2.91814 16.1 2.35147 14.9C1.78481 13.7 1.50147 12.3 1.50147 10.7C1.50147 7.53333 2.61814 5.01667 4.85147 3.15C7.11814 1.25 9.83481 0.299998 13.0015 0.299998C15.8348 0.299998 18.3181 0.999998 20.4515 2.4C22.6181 3.76666 24.3015 5.68333 25.5015 8.15L19.7015 11.5C18.3015 8.5 16.0681 7 13.0015 7C11.5681 7 10.4348 7.33333 9.60148 8C8.80148 8.63333 8.40148 9.46667 8.40148 10.5C8.40148 11.6 8.85148 12.5 9.75148 13.2C10.6848 13.8667 12.4515 14.6 15.0515 15.4C16.1181 15.7333 16.9181 16 17.4515 16.2C18.0181 16.3667 18.7681 16.65 19.7015 17.05C20.6681 17.4167 21.4015 17.7667 21.9015 18.1C22.4348 18.4333 23.0348 18.8833 23.7015 19.45C24.3681 20.0167 24.8681 20.6 25.2015 21.2C25.5681 21.8 25.8681 22.5333 26.1015 23.4C26.3681 24.2333 26.5015 25.15 26.5015 26.15C26.5015 29.3833 25.3181 31.95 22.9515 33.85C20.6181 35.75 17.5681 36.7 13.8015 36.7ZM36.4753 35.4C35.642 36.2333 34.642 36.65 33.4753 36.65C32.3086 36.65 31.3086 36.2333 30.4753 35.4C29.642 34.5667 29.2253 33.5667 29.2253 32.4C29.2253 31.2333 29.642 30.2333 30.4753 29.4C31.3086 28.5667 32.3086 28.15 33.4753 28.15C34.642 28.15 35.642 28.5667 36.4753 29.4C37.3086 30.2333 37.7253 31.2333 37.7253 32.4C37.7253 33.5667 37.3086 34.5667 36.4753 35.4Z"
              fill="#FF0B56"
              variants={{}}
            />
          </motion.svg>
        </motion.div>
      </motion.div>
      <motion.div
        className="color curtain"
        variants={curtainVarient}
      ></motion.div>
    </motion.div>
  )
}

// variants={pathVariant}
// initial={{ opacity: 0, pathLength: 0 }}
// animate={{ opacity: 1, pathLength: 1, transition: { duration: 5 } }}
