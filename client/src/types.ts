export enum LogoVarient {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
}

export interface LogoProps {
  size?: number;
  varient?: LogoVarient;
}
export interface SectionProps {
  sectionTitle: string;
}

export enum TechnologiesEnum {
  'reactjs' = 'React.js',
  'recoiljs' = 'Recoil.js',
  'reduxjs' = 'Redux.js',
  'webrtc' = 'WebRTC',
  'socketio' = 'socket.io',
  'tailwind' = 'Tailwind',
  'nodejs' = 'Node.js',
  'mongodb' = 'MongoDB',
  'firebase' = 'Firebase',
  'nlp' = 'NLP (Deep learning)',
  'cnnDeepLearning' = 'CNN (Deep learning)',
  'mapbox' = 'Mapbox API',
  'flutter' = 'Flutter',
  'reactnative' = 'React Native',
  'razorpay' = 'Razorpay',
  'googleoauth' = 'Google OAuth',
}
export interface WorkType {
  id: string;
  name: string;
  desc: string;
  technology: TechnologiesEnum[];
  bgImageUrl: string;
  url: string;
}
