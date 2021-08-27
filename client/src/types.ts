export enum LogoVarient {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
}

export interface LogoProps {
  size?: number;
  varient?: LogoVarient;
}
