// Images
import sushantImg from '../../static/images/sushant.jpg';

// logos
import logo0 from '../../static/images/sb-logos/logo-0.svg';
import logo1 from '../../static/images/sb-logos/logo-1.svg';
import logo2 from '../../static/images/sb-logos/logo-2.svg';
import logo3 from '../../static/images/sb-logos/logo-3.svg';
import logo4 from '../../static/images/sb-logos/logo-4.svg';

// Conponents
import menuIcon from '../../static/images/components/menu.svg';
import closeIcon from '../../static/images/components/close.svg';
import dot from '../../static/images/components/dot.svg';

// Glass UI
import glassSvg from '../../static/images/glass-ui/parts/glass.svg';
import glassRedBallSvg from '../../static/images/glass-ui/parts/red-ball.svg';
import glassGreenBallSvg from '../../static/images/glass-ui/parts/green-ball.svg';
import avatarImg from '../../static/images/glass-ui/parts/avatar.jpg';

export {
  sushantImg,
  logo0,
  logo1,
  logo2,
  logo3,
  logo4,
  menuIcon,
  closeIcon,
  dot,
  glassSvg,
  glassRedBallSvg,
  glassGreenBallSvg,
  avatarImg,
};

export const iconMap: { [key: string]: string } = {
  nextjs: '/images/icons/next-js.svg',
  reactjs: '/images/icons/react.svg',
  git: '/images/icons/git.svg',
  graphql: '/images/icons/graphql.svg',
  nestjs: '/images/icons/nestjs.svg',
  nodejs: '/images/icons/nodejs.svg',
  mongodb: '/images/icons/mongodb.svg',
  postgres: '/images/icons/postgresql.svg',
  redis: '/images/icons/redis.svg',
  firebase: '/images/icons/firebase.svg',
  flutter: '/images/icons/flutter.svg',
  reactnative: '/images/icons/react-native.svg',
  typescript: '/images/icons/typescript.svg',
  github: '/images/icons/github.svg',
  instagram: '/images/icons/instagram.svg',
  figma: '/images/icons/figma.svg',
  adobexd: '/images/icons/adobe-xd.svg',
  afterEffects: '/images/icons/after-effects.svg',
  dev: '/images/icons/dev.svg',
  medium: '/images/icons/medium.svg',
  linkedin: '/images/icons/linkedin.svg',
  download: '/images/icons/download.svg',
  location: '/images/icons/location.svg',
  mail: '/images/icons/mail.svg',
  tajMahal: '/images/icons/taj-mahal.svg',
};

export const skills: string[] = [
  'nextjs',
  'reactjs',
  'git',
  'graphql',
  'nestjs',
  'nodejs',
  'mongodb',
  'postgres',
  'redis',
  'firebase',
  'flutter',
  'reactnative',
  'typescript',
  'figma',
  'adobexd',
  'afterEffects',
];

export const socialMediaLinks = [
  ['/images/socials/linkedin.svg', 'https://www.linkedin.com/in/saurabh-bomble-954321171/'],
  ['/images/socials/github.svg', 'https://github.com/saurabh-619'],
  ['/images/socials/mail.svg', 'saurabhbomble1011@gmail.com'],
  ['/images/socials/medium.svg', 'https://medium.com/@saurabh107'],
  ['/images/socials/instagram.svg', 'https://www.instagram.com/saurabh_bomble619/'],
];

export const heightOfOnePage = typeof window !== 'undefined' ? window.innerHeight : 750;
