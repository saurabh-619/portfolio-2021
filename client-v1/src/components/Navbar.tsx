import { AnimatePresence } from "framer-motion"
import React, { useEffect, useState } from "react"
import { useScroll } from "../utills/useScroll"
import { Hamburger } from "./Hamburger"
import { Logo } from "./Logo"
import { NavMenu } from "./NavMenu"

export const Navbar = ({}) => {
  const [isNavClicked, setNavClicked] = useState<boolean>(false)
  const [showLogo, setShowLogo] = useState<boolean>(true)

  const handleNavClicked = () => {
    setNavClicked(prev => !prev)
  }

  const heightOfOnePage =
    typeof window !== "undefined" ? window.innerHeight : 750
  const { position } = useScroll()

  useEffect(() => {
    setShowLogo(
      position < heightOfOnePage - heightOfOnePage / 100 ||
        position > 15 * heightOfOnePage
    )
  }, [position])

  return (
    <div className="navbar">
      {showLogo ? <Logo size={50} isNavClicked={isNavClicked} /> : <div></div>}
      {
        <Hamburger
          size={40}
          isNavClicked={isNavClicked}
          onClick={handleNavClicked}
        />
      }
      <AnimatePresence>
        {isNavClicked && <NavMenu setNavClicked={setNavClicked} />}
      </AnimatePresence>
    </div>
  )
}
