import { AnimationControls } from 'framer-motion';
import { Dispatch } from 'react';

export enum LogoVarient {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
}

export enum TechnologiesEnum {
  nextjs = 'nextjs~Next.js',
  reactjs = 'reactjs~React.js',
  recoiljs = 'recoiljs~Recoil.js',
  reduxjs = 'reduxjs~Redux.js',
  webrtc = 'webrtc~WebRTC',
  git = 'git~Git',
  graphql = 'graphql~GraphQL',
  socketio = 'socketio~socket.io',
  tailwind = 'tailwind~Tailwind',
  nestjs = 'nestjs~Nest.js',
  nodejs = 'nodejs~Node.js',
  mongodb = 'mongodb~MongoDB',
  postgres = 'postgres~Postgres',
  redis = 'redis~redis',
  firebase = 'firebase~Firebase',
  nlp = 'nlp~NLP (Deep learning)',
  cnnDeepLearning = 'cnnDeepLearning~CNN (Deep learning)',
  mapbox = 'mapbox~Mapbox API',
  flutter = 'flutter~Flutter',
  reactnative = 'reactnative~React Native',
  razorpay = 'razorpay~Razorpay',
  googleoauth = 'googleoauth~Google OAuth',
  typescript = 'typescript~Typescript',
  figma = 'figma~figma',
  adobexd = 'adobexd~adobexd',
  afterEffects = 'afterEffects~afterEffects',
}

export enum BloggingSites {
  medium = 'medium',
  dev = 'dev',
}

export enum Filters {
  ALL = 'ALL',
  MOST_LIKED = 'MOST LIKED',
  RECENT = 'RECENT',
}

// Props

export interface LogoProps {
  size?: number;
  varient?: LogoVarient;
  isNavClicked: boolean;
}
export interface SectionProps {
  sectionTitle: string;
}
export interface BlogFilterProps {
  totalData: BlogType[];
  setTotalBlogs: any;
  blogs?: [];
  setBlogs?: (dispatch: Dispatch<any>) => void;
  pageNumber?: number;
  setPageNumber?: any;
}

// Classes types
export interface WorkType {
  id: string;
  name: string;
  desc: string;
  technologies: TechnologiesEnum[];
  mockupUrl: string;
  bgImageUrl: string;
  url: string;
  bgColor: string;
}

export interface BlogType {
  id: number;
  name: string;
  desc: string;
  imgUrl: string;
  blogUrl: string;
  websites: BloggingSites[];
  timeStamp: string;
  technologies: TechnologiesEnum[];
  likes: number;
  blogController: AnimationControls;
}
