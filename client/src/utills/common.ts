import { LogoVarient } from '../types';
import { logo0, logo1, logo2 } from './constants';

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
