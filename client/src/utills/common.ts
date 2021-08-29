import { LogoVarient } from '../types';
import { iconMap, logo0, logo1, logo2 } from './constants';

export const getLogoSrc = (varient: LogoVarient) => {
  switch (varient) {
    case LogoVarient.primary:
      return logo0;
    case LogoVarient.secondary:
      return logo1;
    case LogoVarient.tertiary:
      return logo2;
    default:
      return logo0;
  }
};

export const getIconFromTech = (icon: string): string => {
  return iconMap[icon];
};
