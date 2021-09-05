import React, {useState, useEffect } from 'react';
import '../styles/main.scss';
import { About, Blogs, Contact, Home, Skills, Works } from '../screens';
import { Section } from './../screens/Section/Section';
import { Navbar } from '../components';   

const Skelaton: React.FC = () => {
  const windowDoc = typeof window !== "undefined" ? window : null; 
  const hash = windowDoc?.location.hash;
  
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    if (windowDoc && hash) {
      windowDoc.location.href = hash;
    }
    
  }, []);

  if (loading) {
    return <h3>Loading....</h3>
  }

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
