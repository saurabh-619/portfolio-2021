import React from 'react';
import { socialMediaLinks } from '../../utills/constants';

export const Contact = () => {
  return (
    <div id="contact" className="snap">
      <div className="content-wrapper">
        <div className="left container top-heading-padding">
          <h2 className="font-brand90-B">get in touch</h2>
          <div className="center">
            <p className="font-h430-R">
              I’m open to your ideas. I’m also interested in freelance opportunities. Let’s get
              connected and build something together!
            </p>
            <div className="social-icons">
              {socialMediaLinks.map((social: any, index) => (
                <a
                  key={index}
                  className="social-icon"
                  href={`${index === 2 ? 'mailto:' : ''}${social[1]}`}
                  target="_blank"
                >
                  <img src={social[0]} alt="social" />
                </a>
              ))}
            </div>
          </div>
          <div className="footer font-caption13-M">
            <p>
              Designed and Developed by Saurabh Bomble @ {new Date().getFullYear()} All rights
              reserverd.
            </p>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};
