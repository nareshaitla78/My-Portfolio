import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import {  Phone, MapPin, Send, Award, Briefcase } from 'lucide-react';

import { motion } from 'framer-motion';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Aitla Naresh</h3>
            <p className="text-gray-400">
              Full Stack Developer specializing in modern web technologies and responsive design.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase()}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3 text-gray-200">
                <Phone className="w-5 h-5" />
                <a href="tel:+919121041695" className="hover:text-blue-400 transition-colors">+91 9121041695</a>
              </div>
              <div className="flex items-center space-x-3 text-gray-200">
                <MapPin className="w-5 h-5" />
                <span>Hyderabad</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-200">
                <Mail className="w-5 h-5" />
                <a href="mailto:nareshaitla1122@gmail.com" className="hover:text-blue-400 transition-colors">nareshaitla1122@gmail.com</a>
              </div>
              <div className="flex items-center space-x-6">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/nareshaitla78"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-blue-400 transition-colors mb-1"
                >
                  <Github className="w-6 h-6" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.linkedin.com/in/naresh-aitla/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-blue-400 transition-colors mb-1"
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:nareshaitla1122@gmail.com"
                  className="inline-flex items-center px-6 py-3 mb-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-semibold shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Hire Me
                </motion.a>
              </div>
            </motion.div>
            {/* <div className="flex space-x-4">
              <a
                href="https://github.com/nareshaitla78"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/naresh-aitla/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:nareshaitla1122@gmail.com"
                className="text-gray-400 hover:text-white"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div> */}
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Aitla Naresh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;