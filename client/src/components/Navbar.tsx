import React, { useState } from 'react';
import { Hamburger } from './Hamburger';
import { Logo } from './Logo';
import { NavMenu } from './NavMenu';

export const Navbar = () => {
  const [isNavClicked, setNavClicked] = useState<boolean>(false);

  const handleNavClicked = () => {
    setNavClicked((prev) => !prev);
  };

  return (
    <div className="navbar">
      <Logo size={50} />
      {<Hamburger size={40} isNavClicked={isNavClicked} onClick={handleNavClicked} />}
      {isNavClicked && <NavMenu />}
    </div>
  );
};
