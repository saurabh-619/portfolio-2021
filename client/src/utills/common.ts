import { BlogType, LogoVarient } from '../types';
import { iconMap, logo0, logo1, logo2, logo3, logo4 } from './constants';

export const getLogoSrc = (varient?: LogoVarient) => {
  switch (varient) {
    case LogoVarient.primary:
      return logo0;
    case LogoVarient.secondary:
      return logo1;
    case LogoVarient.tertiary:
      return logo2;
    default:
      return logo4;
  }
};

export const getIconFromTech = (icon: string): string => {
  return iconMap[icon];
};

const compareForSortingWithLikes = (a: BlogType, b: BlogType) => {
  if (a.likes > b.likes) {
    return -1;
  }
  if (a.likes < b.likes) {
    return 1;
  }
  return 0;
};

export const sortPostsWithLikes = (posts: BlogType[]) => {
  return posts.sort(compareForSortingWithLikes);
};

const compareForSortingWithDate = (a: BlogType, b: BlogType) => {
  if (parseInt(a.timeStamp) > parseInt(b.timeStamp)) {
    return -1;
  }
  if (parseInt(a.timeStamp) < parseInt(b.timeStamp)) {
    return 1;
  }
  return 0;
};

export const sortPostsWithDate = (posts: BlogType[]) => {
  return posts.sort(compareForSortingWithDate);
};

const compareForSortingWithId = (a: BlogType, b: BlogType) => {
  if (a.id < b.id) {
    return -1;
  }
  if (a.id > b.id) {
    return 1;
  }
  return 0;
};

export const sortPostsWithId = (posts: BlogType[]) => {
  return posts.sort(compareForSortingWithId);
};
