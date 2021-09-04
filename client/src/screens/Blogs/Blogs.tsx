import React, { useEffect } from 'react';
import { bloggingData } from './data';
import { BlogType } from './../../types';
import Blog from './Blog';
import { useState } from 'react';
import BlogFilter from './BlogFilter';
import { useScroll } from '../../utills/useScroll';
import { heightOfOnePage } from '../../utills/constants';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { pageTitleAnimation, staggerWrapper, transitions } from '../../utills/animations';

export const Blogs = () => {
  const [totalData, setTotalBlogs] = useState(bloggingData);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const [showBottomGradient, setShowBottomGradient] = useState(false);

  const { position } = useScroll();

  useEffect(() => {
    setShowBottomGradient(7 * heightOfOnePage < position && position < 11 * heightOfOnePage);
  }, [position]);

  // Animations
  const { ref, inView } = useInView();
  const wrapperController = useAnimation();

  useEffect(() => {
    if (inView) {
      wrapperController.start('animate');
    }
  }, [inView]);

  const fadeUpAnimationNew = {
    initial: {
      y: 30,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: { ...transitions, duration: 0.8 },
    },
  };

  const blogWrapperAnimation = {
    initial: {
      y: 30,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: { ...transitions, duration: 0.8 },
    },
  };

  return (
    <motion.div
      id="blogs"
      className="container pb-2 snap top-heading-padding"
      variants={staggerWrapper(0, 0.6)}
      initial="initial"
      animate={wrapperController}
    >
      <motion.h2 className="font-brand90-B" variants={pageTitleAnimation(undefined, 1)}>
        blogs
      </motion.h2>
      <motion.div variants={fadeUpAnimationNew} ref={ref}>
        <BlogFilter
          totalData={totalData}
          setTotalBlogs={setTotalBlogs}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      </motion.div>
      <motion.div className="blogs-wrapper" variants={blogWrapperAnimation}>
        {totalData.slice((pageNumber - 1) * 4, pageNumber * 4).map((blog: BlogType) => (
          <Blog key={blog.timeStamp} {...blog} />
        ))}
      </motion.div>
      {showBottomGradient && <div className="linear-gradient"></div>}
    </motion.div>
  );
};
