import { motion } from 'framer-motion';
import React from 'react';

export const NavMenu = () => {
  return (
    <div className="navmenu">
      <ul>
        <motion.li className="font-h160-B">
          <a href="#home">home</a>
        </motion.li>
        <li className="font-h160-B">
          <a href="#works">works</a>
        </li>
        <li className="font-h160-B">
          <a href="#blogs">blogs</a>
        </li>
        <li className="font-h160-B">
          <a href="#skills">skills</a>
        </li>
        <li className="font-h160-B">
          <a href="#about">about</a>
        </li>
        <li className="font-h160-B">
          <a href="#contact">contact</a>
        </li>
      </ul>
    </div>
  );
};
