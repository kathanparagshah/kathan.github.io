import React, { useState } from 'react';
import { FiExternalLink, FiGithub, FiFilter } from 'react-icons/fi';

interface Project {
  id: number;
  title: string;
  description: string;
  impact: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl: string;
  image?: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Wheel Strategy Options',
      description: 'A responsive Next.js + TypeScript web app that crunches more than 570k option contracts in real time to surface lucrative covered-call candidates for the Wheel strategy. A custom API supplies live market data, while advanced filters (yield, price, volume, expiration) let traders hone in on ideal setups.',
      impact: 'Processes 570,000+ option contracts in real-time to identify optimal trading opportunities',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Custom API', 'Real-time Data'],
      liveUrl: 'https://wheelstrategyoptions.com/covered-call-screener',
      githubUrl: 'https://github.com/atitkothari/pt-wss',
      featured: true
    },
    {
      id: 2,
      title: 'MegaShop',
      description: 'A comprehensive e-commerce website template built with HTML5, CSS3, and vanilla JavaScript. Features fully responsive design, interactive dropdown navigation, advanced product filtering, and robust search functionality. Includes multiple pre-designed pages with integrated user authentication and shopping cart functionality.',
      impact: 'Provides everything needed to quickly launch a professional online store with engaging UX',
      technologies: ['HTML5', 'CSS3', 'Vanilla JavaScript', 'Responsive Design'],
      liveUrl: 'https://kathanparagshah.github.io/MegaShop/',
      githubUrl: 'https://github.com/kathanparagshah/MegaShop.git',
      featured: true
    },
    {
      id: 3,
      title: 'Sea Level Predictor',
      description: 'A Python-based forecasting tool that uses historical sea-level data and machine-learning regression (scikit-learn) to project future trends. Interactive charts (Matplotlib/Plotly) let you adjust prediction horizons, explore confidence intervals, and export results—ideal for environmental analysis or climate-tech prototyping.',
      impact: 'Enables accurate sea-level trend forecasting for environmental analysis and climate research',
      technologies: ['Python', 'Scikit-learn', 'Matplotlib', 'Plotly', 'Machine Learning', 'Data Analysis'],
      githubUrl: 'https://github.com/kathanparagshah/Demographic-Data-Analyzer.git',
      featured: true
    },
    {
      id: 4,
      title: 'Page View Time Series Visualizer',
      description: 'An interactive web app (Dash/Streamlit) that ingests website analytics and renders dynamic time-series plots. Features include data smoothing, custom date-range selection, trend decomposition, and exportable dashboards—helps product and marketing teams spot traffic patterns at a glance.',
      impact: 'Empowers teams to identify traffic patterns and optimize website performance through visual analytics',
      technologies: ['Python', 'Dash', 'Streamlit', 'Pandas', 'Matplotlib', 'Seaborn', 'Time Series Analysis'],
      githubUrl: 'https://github.com/kathanparagshah/Page-View-Time-Series-Visualizer.git',
      featured: true
    },
    {
      id: 5,
      title: 'Medical Data Visualizer',
      description: 'A dashboard for exploring patient and clinical metrics, built with Plotly Dash (or D3.js). Users can filter by demographic group, treatment type, or time frame and see responsive charts (bar, line, heatmap). Designed to support data-driven decisions in healthcare research or hospital operations.',
      impact: 'Supports data-driven healthcare decisions through comprehensive patient and clinical data visualization',
      technologies: ['Python', 'Plotly Dash', 'D3.js', 'Pandas', 'Matplotlib', 'Seaborn', 'Healthcare Analytics'],
      githubUrl: 'https://github.com/kathanparagshah/Medical-Data-Visualizer.git',
      featured: true
    },
    {
      id: 6,
      title: 'Mean-Variance-Standard Deviation Calculator',
      description: 'A lightweight tool (command-line Python or JavaScript web widget) that computes core descriptive statistics—mean, variance, and standard deviation—for any numeric dataset. Includes easy CSV import and console-/browser-based output, perfect for quick EDA in data-science workflows.',
      impact: 'Streamlines exploratory data analysis with fast computation of essential statistical measures',
      technologies: ['Python', 'JavaScript', 'NumPy', 'Statistics', 'CSV Processing', 'Command Line Tools'],
      githubUrl: 'https://github.com/kathanparagshah/Mean-Variance-Standard-Deviation-Calculator.git',
      featured: true
    },
    {
      title: 'Demographic Data Analyzer',
      description: 'A Python application combining Pandas, GeoPandas, and Folium (or Plotly) to map and chart census-style demographic data by region. Interactive filters let users drill into age, income, education, and population changes over time—useful for urban planners, policy analysts, and social-impact projects.',
      impact: 'Empowers data-driven decision making for urban planning and policy analysis through interactive demographic visualization',
      technologies: ['Python', 'Pandas', 'GeoPandas', 'Folium', 'Plotly', 'Data Visualization', 'Census Data', 'Interactive Mapping'],
      githubUrl: 'https://github.com/kathanparagshah/Demographic-Data-Analyzer.git',
      featured: true
    }
  ];

  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
  );

  const filters = ['All', 'Featured', ...allTechnologies];

  const filteredProjects = projects.filter(project => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Featured') return project.featured;
    return project.technologies.includes(selectedFilter);
  });

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Featured Projects
          </h2>
          
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            A collection of projects that showcase my technical skills and problem-solving abilities. 
            Each project represents a unique challenge and learning opportunity.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <div className="flex items-center space-x-2 text-gray-600 mb-2">
              <FiFilter size={16} />
              <span className="text-sm font-medium">Filter by:</span>
            </div>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedFilter === filter
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card group">
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-primary-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                    Featured
                  </div>
                )}
                
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-3 leading-relaxed">
                    {project.description}
                  </p>
                  <p className="text-sm text-primary-600 font-medium mb-4">
                    💡 {project.impact}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="skill-tag text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4 mt-auto">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
                    >
                      <FiExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 font-medium transition-colors"
                  >
                    <FiGithub size={16} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No projects found for the selected filter.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;