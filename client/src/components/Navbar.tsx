import React, { useEffect, useState } from 'react';
import { useScroll } from '../utills/useScroll';
import { Hamburger } from './Hamburger';
import { Logo } from './Logo';
import { NavMenu } from './NavMenu';

export const Navbar = () => {
  const [isNavClicked, setNavClicked] = useState<boolean>(false);
  const [showLogo, setShowLogo] = useState<boolean>(true);

  const handleNavClicked = () => {
    setNavClicked((prev) => !prev);
  };

  const heightOfOnePage = window.innerHeight;
  const { position } = useScroll();

  useEffect(() => {
    setShowLogo(position < heightOfOnePage || position > 15 * heightOfOnePage);
  }, [position]);

  return (
    <div className="navbar">
      {showLogo ? <Logo size={50} /> : <div></div>}
      {<Hamburger size={40} isNavClicked={isNavClicked} onClick={handleNavClicked} />}
      {isNavClicked && <NavMenu />}
    </div>
  );
};
