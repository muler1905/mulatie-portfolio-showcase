
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      skills: [
        { name: "Python", level: 95 },
        { name: "Django", level: 90 },
        { name: "Flask", level: 85 },
        { name: "PostgreSQL", level: 88 },
        { name: "RESTful APIs", level: 92 }
      ]
    },
    {
      title: "ERP & CRM",
      skills: [
        { name: "Odoo Development", level: 95 },
        { name: "Module Customization", level: 90 },
        { name: "XML-RPC", level: 85 },
        { name: "QWeb Templates", level: 88 },
        { name: "Business Process", level: 85 }
      ]
    },
    {
      title: "Frontend & Mobile",
      skills: [
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 90 },
        { name: "Flutter", level: 80 },
        { name: "React", level: 75 },
        { name: "Responsive Design", level: 88 }
      ]
    },
    {
      title: "Data & Analytics",
      skills: [
        { name: "Data Analysis", level: 85 },
        { name: "Data Visualization", level: 82 },
        { name: "ETL Processes", level: 88 },
        { name: "Data Modeling", level: 85 },
        { name: "Machine Learning", level: 75 }
      ]
    }
  ];

  const softSkills = [
    "Empathy & Understanding",
    "Team Collaboration",
    "Conflict Resolution",
    "Adaptability",
    "Problem Solving",
    "Communication"
  ];

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-blue-600 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Soft Skills & Interpersonal Abilities</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {softSkills.map((skill, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 text-center">
                <span className="text-gray-700 font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
