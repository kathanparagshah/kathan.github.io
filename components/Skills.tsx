import React from 'react';
import { 
  SiJavascript, 
  SiTypescript, 
  SiPython, 
  SiR,
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiExpress, 
  SiGit, 
  SiDocker, 
  SiPostgresql, 
  SiMongodb,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJupyter,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiTensorflow,
  SiTableau,
  SiMysql,
  SiMicrosoftexcel
} from 'react-icons/si';
import { FaJava, FaChartBar, FaDatabase } from 'react-icons/fa';

const Skills: React.FC = () => {
  const getSkillIcon = (iconName: string, className: string) => {
    const iconProps = { className };
    switch (iconName) {
      case 'SiPython': return <SiPython {...iconProps} />;
      case 'SiR': return <SiR {...iconProps} />;
      case 'SiJavascript': return <SiJavascript {...iconProps} />;
      case 'SiTypescript': return <SiTypescript {...iconProps} />;
      case 'FaJava': return <FaJava {...iconProps} />;
      case 'SiHtml5': return <SiHtml5 {...iconProps} />;
      case 'SiCss3': return <SiCss3 {...iconProps} />;
      case 'SiJupyter': return <SiJupyter {...iconProps} />;
      case 'SiNumpy': return <SiNumpy {...iconProps} />;
      case 'SiPandas': return <SiPandas {...iconProps} />;
      case 'SiScikitlearn': return <SiScikitlearn {...iconProps} />;
      case 'SiTensorflow': return <SiTensorflow {...iconProps} />;
      case 'SiTableau': return <SiTableau {...iconProps} />;
      case 'SiReact': return <SiReact {...iconProps} />;
      case 'SiNextdotjs': return <SiNextdotjs {...iconProps} />;
      case 'SiNodedotjs': return <SiNodedotjs {...iconProps} />;
      case 'SiExpress': return <SiExpress {...iconProps} />;
      case 'SiTailwindcss': return <SiTailwindcss {...iconProps} />;
      case 'SiGit': return <SiGit {...iconProps} />;
      case 'SiDocker': return <SiDocker {...iconProps} />;
      case 'SiPostgresql': return <SiPostgresql {...iconProps} />;
      case 'SiMysql': return <SiMysql {...iconProps} />;
      case 'SiMongodb': return <SiMongodb {...iconProps} />;
      case 'SiMicrosoftexcel': return <SiMicrosoftexcel {...iconProps} />;
      case 'FaChartBar': return <FaChartBar {...iconProps} />;
      case 'FaDatabase': return <FaDatabase {...iconProps} />;
      default: return null;
    }
  };

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', icon: 'SiPython', iconClass: 'text-blue-500', level: 90 },
        { name: 'R', icon: 'SiR', iconClass: 'text-blue-600', level: 85 },
        { name: 'JavaScript', icon: 'SiJavascript', iconClass: 'text-yellow-500', level: 80 },
        { name: 'Java', icon: 'FaJava', iconClass: 'text-red-600', level: 75 },
        { name: 'TypeScript', icon: 'SiTypescript', iconClass: 'text-blue-600', level: 70 }
      ]
    },
    {
      title: 'Data Science & ML',
      skills: [
        { name: 'Pandas', icon: 'SiPandas', iconClass: 'text-blue-600', level: 88 },
        { name: 'NumPy', icon: 'SiNumpy', iconClass: 'text-blue-500', level: 85 },
        { name: 'Scikit-learn', icon: 'SiScikitlearn', iconClass: 'text-orange-500', level: 82 },
        { name: 'TensorFlow', icon: 'SiTensorflow', iconClass: 'text-orange-600', level: 75 },
        { name: 'Jupyter', icon: 'SiJupyter', iconClass: 'text-orange-500', level: 90 }
      ]
    },
    {
      title: 'Data & Analytics Tools',
      skills: [
        { name: 'SQL', icon: 'FaDatabase', iconClass: 'text-blue-700', level: 88 },
        { name: 'Tableau', icon: 'SiTableau', iconClass: 'text-blue-600', level: 80 },
        { name: 'Excel', icon: 'SiMicrosoftexcel', iconClass: 'text-green-600', level: 92 },
        { name: 'Statistics', icon: 'FaChartBar', iconClass: 'text-purple-600', level: 85 },
        { name: 'PostgreSQL', icon: 'SiPostgresql', iconClass: 'text-blue-700', level: 78 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Skills & Technologies
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="text-2xl">
                            {getSkillIcon(skill.icon, skill.iconClass)}
                          </div>
                          <span className="font-medium text-gray-900">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm text-gray-600">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-primary-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Skills Tags */}
          <div className="mt-12 text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Additional Technologies & Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Machine Learning', 'Deep Learning', 'Data Visualization', 'Statistical Analysis', 
                'Econometrics', 'Time Series Analysis', 'A/B Testing', 'Hypothesis Testing',
                'Linear Regression', 'Logistic Regression', 'Random Forest', 'Neural Networks',
                'Data Mining', 'ETL', 'Big Data', 'MongoDB', 'Git', 'Docker', 'AWS', 
                'Matplotlib', 'Seaborn', 'Plotly', 'Power BI', 'SPSS', 'Stata'
              ].map((tech, index) => (
                <span key={index} className="skill-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;