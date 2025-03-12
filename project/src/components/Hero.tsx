import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin, Send, Award, Briefcase } from 'lucide-react';
import Aitla from '../assets/Aitla.jpeg';
const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70 dark:from-gray-900/95 dark:to-gray-900/80" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl lg:text-6xl font-bold mb-4 text-white bg-clip-text bg-gradient-to-r from-white to-gray-200"
            >
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Aitla Naresh</span>
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl lg:text-2xl mb-6 text-gray-200"
            >
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'React.js Developer',
                  2000,
                  'Node.js Developer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"
              />
            </motion.div>

            {/* Work Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mb-6 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
            >
              <div className="flex items-center mb-3">
                <Briefcase className="w-5 h-5 text-blue-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Current Position</h3>
              </div>
              <div className="text-gray-200">
                <p className="font-semibold mb-1">Solutions Developer</p>
                <p className="text-sm text-gray-300 mb-2">June 2024 — Present</p>
                <ul className="list-disc list-inside text-sm space-y-2">
                  <li>Full-time position after successful internship completion</li>
                  <li>Developing frontend and backend solutions using React.js, Vue.js, Flask, SQL, and Node.js</li>
                  <li>Leading critical projects with focus on performance and functionality</li>
                  <li>Managing client communications and requirement gathering</li>
                  <li>Implementing version control best practices with GitHub</li>
                </ul>
              </div>
            </motion.div>

            {/* Certificates */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mb-6 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
            >
              <div className="flex items-center mb-3">
                <Award className="w-5 h-5 text-blue-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Certifications</h3>
              </div>
              <div className="grid grid-cols-1 gap-2">
                <a 
                  href="https://www.hackerrank.com/certificates/iframe/1234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-blue-400 transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  React (Basic) Certificate
                </a>
                <a 
                  href="https://www.hackerrank.com/certificates/iframe/7654321"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-blue-400 transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  JavaScript (Intermediate) Certificate
                </a>
                <a 
                  href="https://www.coursera.org/account/accomplishments/verify/123456"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-blue-400 transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Full Stack Web Development
                </a>
              </div>
            </motion.div> */}

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
                {/* <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:nareshaitla1122@gmail.com"
                  className="inline-flex items-center px-6 py-3 mb-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-semibold shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Hire Me
                </motion.a> */}
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 mb-10 lg:mb-0"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={Aitla}
                alt="Aitla Naresh"
                className="rounded-full w-64 h-64 lg:w-96 lg:h-96 object-cover mx-auto shadow-2xl ring-4 ring-blue-500/50"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;