import React from 'react';
import {
  avatarImg,
  glassGreenBallSvg,
  glassRedBallSvg,
  glassSvg,
  iconMap,
} from '../../utills/constants';

import { ArrowDownCircle, MapPin } from 'react-feather';

export const About = () => {
  return (
    <div id="about" className="container snap top-heading-padding">
      <div className="green-blurred-ball"></div>
      <h2 className="font-brand90-B">whoami</h2>
      <div className="content-wrapper">
        <div className="left">
          <h6 className="font-contact-tags tags">{'<p>'}</h6>
          <div className="content">
            <p className="font-medium17-R">
              Hi, <span className="title font-intro24-B"> I'M SAURABH BOMBLE</span>
            </p>
            <p className="main-text font-medium17-M">
              Software designer and developer based in Pune, India. I am currently in my final year
              of computer engineering and have a strong interest in UI design, animations, and
              software development.
            </p>
            <p className="main-text font-medium17-M">
              I began learning coding back in 2019 with web development and have enjoyed working on
              both frontend and backend parts since then. Currently, I'm concentrating on the
              performance, scalability, and UI/UX aspects of apps.
            </p>
          </div>
          <p className="contact-text"></p>
          <p className="contact-text"></p>
          <h6 className="font-contact-tags tags">{'</p>'}</h6>
        </div>
        <div className="right">
          <div className="card">
            <div className="glass">
              <div className="header">
                <div className="text">
                  <h3 className="font-glass-name">SAURABH ANAND BOMBLE</h3>
                  <h4 className="font-medium17-R">UI/UX designer & Software developer</h4>
                </div>
                <img src={avatarImg} alt="avatar-img" className="avatar-img" />
              </div>
              <div className="links">
                <div className="location">
                  <span>
                    <MapPin size="25" />
                  </span>
                  <h3 className="font-main20-R">Pune, India</h3>
                </div>
                <a className="resume" href="">
                  <h3 className="font-main20-B">resume</h3>{' '}
                  <span>
                    <ArrowDownCircle size="25" />
                  </span>
                </a>
              </div>
            </div>

            <img src={glassRedBallSvg} alt="glass" className="red-ball" />
            <img src={glassGreenBallSvg} alt="glass" className="green-ball" />
          </div>
        </div>
      </div>
      <div className="red-blurred-ball"></div>
    </div>
  );
};
