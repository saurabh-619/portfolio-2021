import { motion } from "framer-motion"
import React from "react"
import { transitions } from "../utills/animations"

export const NavMenu = ({ setNavClicked }: { setNavClicked: any }) => {
  const bgAnimation = {
    hidden: {
      y: "100%",
    },
    show: {
      y: 0,
      transition: { duration: 0.8, delayChildren: 0.8 },
    },
    exit: {
      y: "-100%",
      opacity: 0,
      transition: { duration: 1.5 },
    },
  }

  const ulAnimation = {
    show: {
      transition: { staggerChildren: 0.25 },
    },
    exit: {
      transition: { staggerChildren: 0.15 },
    },
  }

  const liItemAnimation = {
    hidden: {
      x: -60,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: {
      x: -25,
      opacity: 0,
      transition: { duration: 0.2 },
    },
  }

  const whileHoverNavigation = {
    scale: 1.1,
    transition: { ...transitions, type: "spring", duration: 0.2 },
  }

  const handleNavOptionClicked = () => {
    setNavClicked((prev: any) => !prev)
  }

  return (
    <motion.div
      className="navmenu"
      initial="hidden"
      animate="show"
      variants={bgAnimation}
      exit="exit"
    >
      <motion.ul variants={ulAnimation}>
        <motion.li
          className="font-h160-B"
          variants={liItemAnimation}
          whileHover={whileHoverNavigation}
          onClick={handleNavOptionClicked}
        >
          <a href={"#home"}>home</a>
        </motion.li>
        <motion.li
          className="font-h160-B"
          variants={liItemAnimation}
          whileHover={whileHoverNavigation}
          onClick={handleNavOptionClicked}
        >
          <a href={"#section-works"}>works</a>
        </motion.li>
        <motion.li
          className="font-h160-B"
          variants={liItemAnimation}
          whileHover={whileHoverNavigation}
          onClick={handleNavOptionClicked}
        >
          <a href={"#section-blogs"}>blogs</a>
        </motion.li>
        <motion.li
          className="font-h160-B"
          variants={liItemAnimation}
          whileHover={whileHoverNavigation}
          onClick={handleNavOptionClicked}
        >
          <a href={"#section-skills"}>skills</a>
        </motion.li>
        <motion.li
          className="font-h160-B"
          variants={liItemAnimation}
          whileHover={whileHoverNavigation}
          onClick={handleNavOptionClicked}
        >
          <a href={"#section-about"}>about</a>
        </motion.li>
        <motion.li
          className="font-h160-B"
          variants={liItemAnimation}
          whileHover={whileHoverNavigation}
          onClick={handleNavOptionClicked}
        >
          <a href={"#section-contact"}>contact</a>
        </motion.li>
      </motion.ul>
    </motion.div>
  )
}
