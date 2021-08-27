import React from 'react';
import { Navbar } from '../../components';
import { sushantImg } from '../../utills/constants';

export const Home = () => {
  return (
    <div id="home">
      <Navbar />
      <div className="wrapper">
        <div className="left">
          <div className="content">
            <div className="font-sbbrand name">
              saurabh <br />
              bomble
            </div>
            <div className="font-intro24-R caption">UI Designer and Software Developer </div>
          </div>
          <div className="scroll1">
            <h4 className="font-caption15-R"> scroll down</h4>
            <div className="down-border"></div>
          </div>
        </div>
        <div className="right">
          <img src={sushantImg} alt="sushantImg" />
          <div className="scroll2">
            <a className="font-caption15-R" href="mailto:saurabhbomble1011@gmail.com">
              saurabhbomble1011@gmail.com
            </a>
            <div className="down-border"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
