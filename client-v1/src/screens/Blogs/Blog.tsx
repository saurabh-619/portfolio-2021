import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { BloggingSites, BlogType, TechnologiesEnum } from '../../types';
import { imageAnimation, transitions } from '../../utills/animations';
import { getIconFromTech } from '../../utills/common';

const Blog: React.FC<BlogType> = ({
  name,
  desc,
  imgUrl,
  blogUrl,
  websites,
  technologies,
  timeStamp,
  likes,
}) => {
  const { ref, inView } = useInView();
  const blogController = useAnimation();
  const imgController = useAnimation();

  useEffect(() => {
    if (inView) {
      imgController.start('animate');
      blogController.start('animate');
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
      transition: {
        ...transitions,
        duration: 0.8,
      },
    },
  };
  return (
    <motion.div
      className="blog"
      initial="initial"
      variants={fadeUpAnimationNew}
      animate={blogController}
      ref={ref}
    >
      <motion.img
        src={imgUrl}
        alt="Blog Img"
        className="blog-img"
        variants={imageAnimation(1.15)}
        initial="initial"
        animate={imgController}
      />
      <div className="content">
        <motion.a className="font-h430-B name" href={blogUrl} target="_blank" rel="noreferrer">
          {name.length < 50 ? name : `${name.substring(0, 50)} ...`}
        </motion.a>

        {/* <br />
        <br />
        <h3>likes - {likes}</h3>
        <br />
        <h3>date - {new Date(parseInt(timeStamp)).toLocaleString()}</h3> */}
        <p className="font-medium17-R desc">
          {desc.length < 290 ? desc : `${desc.substring(0, 290)} ...`}
        </p>
        <div className="bottom">
          <div className="left">
            {websites.map((web: BloggingSites, index) => (
              <img
                key={index}
                src={getIconFromTech(web)}
                alt="BloggingSites"
                className="blogging-site-icon"
              />
            ))}
          </div>
          <div className="right">
            {technologies.map((tech: TechnologiesEnum, index) => (
              <div key={index} className="icon-neu">
                <img
                  key={index}
                  src={getIconFromTech(tech.split('~')[0])}
                  alt="tech-icon"
                  className="tech-icon"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Blog;
