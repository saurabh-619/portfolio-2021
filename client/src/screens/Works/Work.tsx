import React from 'react';
import { TechnologiesEnum, WorkType } from '../../types';
import { dot } from '../../utills/constants';

export const Work: React.FC<WorkType> = ({
  id,
  name,
  desc,
  technologies,
  bgImageUrl,
  mockupUrl,
  url,
  bgColor,
}) => {
  return (
    <div
      className="container work snap"
      style={{
        background: mockupUrl !== '' ? bgColor : `url(${bgImageUrl})`,
      }}
    >
      {mockupUrl && <img src={mockupUrl} alt="mockupUrl" className="mockupImg" />}
      <div className="content">
        <div className="left">
          <a className="name font-h160-B" href={url} target="_blank">
            {name}
          </a>
          <h3 className="desc font-main20-R">{desc}</h3>
          <div className="technologies">
            {technologies.map((tech: TechnologiesEnum, index) => (
              <div key={index} className="tech">
                <img src={dot} alt="dot" className="dot" />
                <div className="title font-medium17-M">{tech.split('~')[1]}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="right font-brand160-B">{id}</div>
      </div>
    </div>
  );
};
