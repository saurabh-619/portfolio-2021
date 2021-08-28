import React from 'react';
import '../styles/main.scss';
import { Home } from '../screens';
import { Section } from './../screens/Section/Section';
import { Navbar } from '../components';
import Works from '../screens/Works/Works';

const Skelaton: React.FC = () => {
  return (
    <div id="App">
      <Navbar />
      <Home />
      <Section sectionTitle="works" />
      <Works />
    </div>
  );
};

export default Skelaton;
