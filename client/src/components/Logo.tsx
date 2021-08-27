import React from 'react';
import { LogoProps, LogoVarient } from '../types';
import { getLogoSrc } from '../utills/common';
export const Logo: React.FC<LogoProps> = ({ size = 30, varient = LogoVarient.primary }) => {
  return (
    <>
      <img className="logo-icon" src={getLogoSrc(varient)} alt="sb" height={size} width={size} />
    </>
  );
};
