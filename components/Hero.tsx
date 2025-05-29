import React from 'react';
import Image from 'next/image';
import { FiDownload, FiArrowDown } from 'react-icons/fi';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
      <div className="container-max section-padding text-center">
        <div className="animate-fade-in">
          {/* Profile Picture */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <Image
                src="/profile picture.jpeg"
                alt="Kathan Parag Shah"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-primary-600">Kathan Parag Shah</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-600 mb-8 font-medium">
            Computer Science & Economics Student at Arizona State University
          </h2>
          
          <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            I build exceptional digital experiences that combine clean code with intuitive design, 
            turning complex problems into elegant solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <FiDownload size={20} />
              Download Resume
            </a>
            
            <button
              onClick={scrollToAbout}
              className="btn-secondary"
            >
              Learn More
            </button>
          </div>
          
          <button
            onClick={scrollToAbout}
            className="animate-bounce text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Scroll to about section"
          >
            <FiArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;