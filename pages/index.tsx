import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <Layout
      title="Kathan Parag Shah - Computer Science & Economics Student"
      description="Personal portfolio of Kathan Parag Shah, a passionate Computer Science and Economics student at Arizona State University specializing in modern web development and creating exceptional digital experiences."
    >
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </Layout>
  );
};

export default Home;