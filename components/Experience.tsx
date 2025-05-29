import React from 'react';
import { FiBriefcase, FiBook, FiCalendar, FiMapPin } from 'react-icons/fi';

const Experience: React.FC = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Security Aide',
      organization: 'ASU Gammage',
      location: 'Tempe, AZ',
      period: 'February 2025 – Present',
      achievements: [
        'Conduct regular patrols across campus to ensure safety and deter potential threats',
        'Monitor surveillance systems and respond swiftly to security incidents',
        'Enforce campus protocols while assisting students and staff during busy periods',
        'Maintain order to create a secure environment for all'
      ]
    },
    {
      type: 'work',
      title: 'Information Technology Support Specialist',
      organization: 'W.P. Carey School of Business',
      location: 'Tempe, AZ',
      period: 'November 2024 – January 2025',
      achievements: [
        'Optimized IT support processes to enhance efficiency and user satisfaction',
        'Implemented system-wide improvements using Django and Git to ensure seamless IT infrastructure',
        'Streamlined troubleshooting protocols to reduce downtime and improve response times'
      ]
    },
    {
      type: 'work',
      title: 'Technology Assistant',
      organization: 'Sun Devil Athletics',
      location: 'Tempe, AZ',
      period: 'October 2023 – November 2024',
      achievements: [
        'Managed the setup, maintenance, and troubleshooting of over 150 systems to ensure uninterrupted operations',
        'Resolved 95 percent of technical issues within 24 hours to minimize disruptions',
        'Led training sessions that increased staff proficiency and boosted operational efficiency by 30 percent'
      ]
    },
    {
      type: 'work',
      title: 'Desk Assistant',
      organization: 'University Housing',
      location: 'Tempe, AZ',
      period: 'October 2023 – November 2023',
      achievements: [
        'Monitored residential areas and conducted safety patrols for more than 300 students',
        'Enhanced safety protocols in collaboration with housing staff to reduce incidents and unauthorized access',
        'Documented key hazards and security breaches to foster a safer living environment'
      ]
    },
    {
      type: 'work',
      title: 'Program Activator',
      organization: 'Changemaker Central',
      location: 'Tempe, AZ',
      period: 'September 2023 – November 2023',
      achievements: [
        'Coordinated seven outreach events that engaged over 100 participants',
        'Led interactive workshops to boost community participation and skills',
        'Collaborated closely with leadership to refine event strategies for enhanced overall impact'
      ]
    },
    {
      type: 'work',
      title: 'Software Developer Intern',
      organization: 'Tizzy Cloud Computing Pvt. Ltd.',
      location: 'Remote',
      period: 'November 2022 – November 2022',
      achievements: [
        'Enhanced performance across 10+ projects, improving application efficiency by 8%',
        'Optimized resource allocation using Google Cloud Platform (GCP), reducing project delays by 15%',
        'Collaborated with stakeholders to streamline development cycles, achieving a 10% improvement in delivery timelines'
      ]
    },
    {
      type: 'work',
      title: 'Software Developer Intern',
      organization: 'MukeSoft IT Consultants',
      location: 'Remote',
      period: 'May 2022 – May 2022',
      achievements: [
        'Designed detailed flowcharts and process diagrams, improving development workflow and data accuracy',
        'Researched and integrated emerging technologies, enhancing system performance by 10%',
        'Collaborated with cross-functional teams to develop scalable solutions aligned with business needs'
      ]
    },
    {
      type: 'education',
      title: 'Bachelor of Science in Computer Science and Economics',
      organization: 'Arizona State University',
      location: 'Tempe, AZ',
      period: '2022 - 2026 (Expected)',
      achievements: [
        'Relevant Coursework: Data Structures, Algorithms, Software Engineering, Database Systems, Econometrics, Statistics',
        'Focus on intersection of technology and economic analysis for data-driven decision making'
      ]
    }
  ];

  const getIcon = (type: string) => {
    return type === 'education' ? (
      <FiBook className="text-primary-600" size={20} />
    ) : (
      <FiBriefcase className="text-primary-600" size={20} />
    );
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Experience & Education
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block" />
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start space-x-6">
                  {/* Timeline dot */}
                  <div className="hidden md:flex flex-shrink-0 w-16 h-16 bg-white border-4 border-primary-600 rounded-full items-center justify-center relative z-10">
                    {getIcon(exp.type)}
                  </div>
                  
                  {/* Mobile icon */}
                  <div className="md:hidden flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    {getIcon(exp.type)}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-gray-50 rounded-lg p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-primary-600 font-medium mb-2">
                          {exp.organization}
                        </p>
                      </div>
                      
                      <div className="flex flex-col md:items-end text-sm text-gray-600">
                        <div className="flex items-center space-x-1 mb-1">
                          <FiCalendar size={14} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <FiMapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
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

export default Experience;