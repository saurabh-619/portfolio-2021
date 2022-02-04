import { Link } from "@reach/router"
import { motion } from "framer-motion"
import React from "react"
import { LogoProps, LogoVarient } from "../types"
import { getLogoSrc } from "../utills/common"
export const Logo: React.FC<LogoProps> = ({
  size = 30,
  varient = LogoVarient.primary,
  isNavClicked,
}) => {
  const hamVariant = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 1 } },
  }

  return (
    <Link to="#home">
      <motion.img
        className="logo-icon"
        src={isNavClicked ? getLogoSrc() : getLogoSrc(varient)}
        alt="sb"
        height={size}
        width={size}
        variants={hamVariant}
        initial="initial"
        animate="animate"
      />
    </Link>
  )
}
