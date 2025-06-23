
import React from 'react';
import { User, Calendar, Globe, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I'm a dedicated full-stack developer with extensive experience in software development, 
              data visualization, and ERP systems. My expertise spans across Python frameworks like 
              Django and Flask, with specialized knowledge in Odoo development and system integration.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With a strong foundation in both frontend and backend technologies, I excel at creating 
              comprehensive software solutions that meet complex business requirements. I'm committed 
              to continuous learning and delivering high-quality, scalable applications.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <Calendar className="text-blue-600" size={20} />
                <div>
                  <p className="font-semibold text-gray-900">Born</p>
                  <p className="text-gray-600">June 26, 1999</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="text-blue-600" size={20} />
                <div>
                  <p className="font-semibold text-gray-900">Nationality</p>
                  <p className="text-gray-600">Ethiopian</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Award className="text-blue-600" size={20} />
                <div>
                  <p className="font-semibold text-gray-900">Education</p>
                  <p className="text-gray-600">Software Engineering</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <User className="text-blue-600" size={20} />
                <div>
                  <p className="font-semibold text-gray-900">Languages</p>
                  <p className="text-gray-600">Amharic, English (C1)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Competencies</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">Full-Stack Web Development</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">ERP & CRM Systems (Odoo)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">Data Analysis & Visualization</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">API Integration & Development</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">Database Design & Management</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">Mobile App Development</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
