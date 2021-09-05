import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { menuIcon, closeIcon } from '../utills/constants';

interface HamProps {
  size?: number;
  isNavClicked: boolean;
  onClick: (e: any) => void;
}

export const Hamburger: React.FC<HamProps> = ({ size = 30, isNavClicked, onClick }) => {
  const hamVariant = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 1 } },
  };

  return (
    <>
      <motion.img
        className="ham-icon"
        src={isNavClicked ? closeIcon : menuIcon}
        alt="Hamburger Icon"
        height={size}
        width={size}
        onClick={onClick}
        variants={hamVariant}
        initial="initial"
        animate="animate"
      />
    </>
  );
};
