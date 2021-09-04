export const transitions = {
  duration: 1.4,
  ease: [0.6, 0.01, -0.05, 0.9],
};

export const imageAnimation = (scale = 0.9, duration = 3, opacity = 0.8) => ({
  initial: {
    scale,
    opacity,
  },
  animate: { ...transitions, scale: 1, opacity: 1, transition: { duration } },
});

export const workImageAnimation = (scale = 0.9, duration = 3, opacity = 0.8) => ({
  initial: {
    y: 25,
    scale,
    opacity,
  },
  animate: { y: 0, scale: 1, opacity: 1, transition: { duration } },
});

export const fadeUpAnimation = (y = 30, duration = 2, delay = 2) => ({
  initial: {
    y,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { ...transitions, delay, duration },
  },
});

export const headingAnimation = (y = 30, duration = 2) => ({
  initial: {
    y: 30,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration },
  },
});

export const staggerWrapper = (delay = 1, staggerChildren = 0.5) => ({
  initial: {},
  animate: {
    transition: {
      delay,
      staggerChildren,
    },
  },
});

export const staggerTransition = (staggerChildren = 0.1) => ({
  staggerChildren,
});

export const pageTitleAnimation = (x = '-100%', duration = 1) => ({
  initial: {
    x,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { ...transitions, duration },
  },
});
