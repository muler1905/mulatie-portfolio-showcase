
import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "Etta Solution",
      location: "Addis Ababa, Ethiopia",
      period: "December 2024 - Current",
      description: [
        "Developed 10+ custom Odoo modules using Python and PostgreSQL",
        "Designed responsive UI with XML, CSS, JavaScript, and QWeb, improving usability",
        "Integrated Odoo with third-party APIs, streamlining payment and inventory processes and IoT devices",
        "Developed Python scripts for data cleaning, structuring, and importing into Odoo ERP using ETL processes"
      ]
    },
    {
      title: "Data Annotation Specialist",
      company: "Mindrift.ai",
      location: "Remote",
      period: "June 2024 - October 2024",
      description: [
        "Data Annotation for Machine Learning and AI Model Training",
        "Experienced in annotating and structuring datasets for machine learning",
        "Ensured high-quality training data for AI model development"
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-blue-600 mb-2">
                    <Building size={18} />
                    <span className="font-semibold">{exp.company}</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-3">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
