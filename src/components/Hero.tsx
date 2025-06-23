
import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl">
              MA
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 animate-fade-in">
              Mulatie Andargie
            </h1>
            <p className="text-xl md:text-2xl text-blue-600 font-semibold mb-6 animate-fade-in">
              Full-Stack Developer & Software Engineer
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 animate-fade-in">
              Passionate software professional specializing in Python, Django, Odoo development, 
              and data visualization with a proven track record in building robust software solutions.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin size={18} className="text-blue-600" />
              <span>Addis Ababa, Ethiopia</span>
            </div>
            <a href="tel:+251943496169" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Phone size={18} className="text-blue-600" />
              <span>(+251) 943496169</span>
            </a>
            <a href="mailto:mulatiee19@gmail.com" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Mail size={18} className="text-blue-600" />
              <span>mulatiee19@gmail.com</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/mulatie-andargie-84a263231/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-blue-600"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/muler1905"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-gray-900"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
