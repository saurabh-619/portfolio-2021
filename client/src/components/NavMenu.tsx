import { motion } from 'framer-motion';
import React from 'react';

export const NavMenu = () => {
  return (
    <div className="navmenu">
      <ul>
        <motion.li className="font-h160-B">home</motion.li>
        <li className="font-h160-B">works</li>
        <li className="font-h160-B">blogs</li>
        <li className="font-h160-B">skills</li>
        <li className="font-h160-B">about</li>
        <li className="font-h160-B">contact</li>
      </ul>
    </div>
  );
};
