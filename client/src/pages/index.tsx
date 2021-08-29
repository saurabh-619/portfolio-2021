import React from 'react';
import '../styles/main.scss';
import { About, Blogs, Contact, Home, Skills, Works } from '../screens';
import { Section } from './../screens/Section/Section';
import { Navbar } from '../components';

const Skelaton: React.FC = () => {
  return (
    <div id="App">
      <Navbar />
      <Home />
      <Section sectionTitle="works" />
      <Works />
      <Section sectionTitle="blogs" />
      <Blogs />
      <Section sectionTitle="skills" />
      <Skills />
      <Section sectionTitle="about" />
      <About />
      <Section sectionTitle="contact" />
      <Contact />
    </div>
  );
};

export default Skelaton;
