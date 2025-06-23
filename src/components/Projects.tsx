
import React from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Criminal Record Management System",
      period: "December 2022 - March 2023",
      description: "A comprehensive system for managing criminal records with secure authentication, advanced search functionality, and detailed reporting capabilities.",
      technologies: ["Django", "Python", "SQLite", "HTML/CSS", "JavaScript"],
      features: [
        "Secure user authentication with role-based access",
        "Complete CRUD operations for criminal records",
        "Advanced search and filtering capabilities",
        "Data encryption and secure storage",
        "Comprehensive reporting and analytics"
      ],
      github: "https://github.com/muler1905/CriminalRecords/"
    },
    {
      title: "Tour and Travel Mobile App",
      period: "April 2023 - July 2023",
      description: "Cross-platform mobile application for travel booking and management with Django REST API backend and Flutter frontend.",
      technologies: ["Flutter", "Django REST Framework", "SQLite", "Dart", "Python"],
      features: [
        "Cross-platform mobile application",
        "RESTful API integration",
        "User authentication and authorization",
        "Real-time data synchronization",
        "Travel package booking system"
      ],
      github: "https://github.com/muler1905/tourandtravel"
    },
    {
      title: "Tamrin Odoo ERP System",
      period: "Custom Development",
      description: "Enhanced Odoo ERP system with custom modules for biometrics integration, fleet management, and petty cash workflows.",
      technologies: ["Odoo", "Python", "PostgreSQL", "XML-RPC", "QWeb", "JavaScript"],
      features: [
        "Biometrics integration with ZKTeco devices",
        "Enhanced fleet module with fuel tracking",
        "Custom petty cash management module",
        "Real-time attendance synchronization",
        "Automated service reminders"
      ]
    }
  ];

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <Calendar size={16} />
                  <span className="text-sm">{project.period}</span>
                </div>
                <p className="text-gray-700 mb-4">{project.description}</p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.github && (
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm"
                  >
                    <Github size={16} />
                    <span>View Code</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
