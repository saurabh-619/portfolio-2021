import React from 'react';
import { menuIcon, closeIcon } from '../utills/constants';

interface HamProps {
  size?: number;
  isNavClicked: boolean;
  onClick: (e: any) => void;
}

export const Hamburger: React.FC<HamProps> = ({ size = 30, isNavClicked, onClick }) => {
  return (
    <>
      <img
        className="ham-icon"
        src={isNavClicked ? closeIcon : menuIcon}
        alt="Hamburger Icon"
        height={size}
        width={size}
        onClick={onClick}
      />
    </>
  );
};
