import React, {useState, useEffect} from 'react';
import '../styles/main.scss';
import { About, Blogs, Contact, Home, Skills, Works ,Section, Loading} from '../screens'; 
import {Head, Navbar } from '../components';     
import { AnimatePresence } from 'framer-motion';


const Skelaton: React.FC = () => {
  const windowDoc = typeof window !== "undefined" ? window : null; 
  const hash = windowDoc?.location.hash;
  
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      if (windowDoc && hash) {
        windowDoc.location.href = hash;
      }
    }, 4500); 
    () => clearTimeout(timeout);    
  }, []);  
    
  return (
    <>
      <Head/>
      <AnimatePresence>
        {loading ? <Loading />
          : (
            <div id="App" > 
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
          )
        }
      </AnimatePresence>
    </>
  );
};

export default Skelaton;
