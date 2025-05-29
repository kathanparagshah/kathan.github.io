import React from 'react';
import { FiCode, FiUsers, FiTrendingUp } from 'react-icons/fi';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <FiCode size={24} />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code with best practices'
    },
    {
      icon: <FiUsers size={24} />,
      title: 'Collaboration',
      description: 'Strong team player with excellent communication skills'
    },
    {
      icon: <FiTrendingUp size={24} />,
      title: 'Growth Mindset',
      description: 'Continuously learning and adapting to new technologies'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                My journey into the intersection of technology and economics began with a fascination for how 
                digital systems can solve real world problems and drive economic growth. As a Computer Science 
                and Economics double major at Arizona State University I have seen firsthand that the most 
                impactful solutions emerge when technical innovation meets economic insight.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                What drives me is the potential to build technology that not only functions beautifully but 
                also generates meaningful economic value. Whether I am building full stack applications or 
                analyzing market trends I approach each challenge with the belief that great software 
                should be both technically robust and economically viable.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                When I am not prototyping new features or digging into data you will find me exploring new 
                cities, gliding across the ice at my local rink or curled up with a classic 1990s movie. 
                Travel, ice skating and vintage cinema keep my creativity sharp and remind me that the best 
                ideas often come from life outside the code.
              </p>
            </div>
            
            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;