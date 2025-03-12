import React from 'react';
import { motion } from 'framer-motion';
import { FileDown } from 'lucide-react';
import A_Naresh_Resume from '../assets/A_Naresh_Resume.pdf';
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I am a passionate Full Stack Developer with expertise in modern web technologies.
              With a strong foundation in computer science and a keen eye for detail, I specialize
              in creating responsive and user-friendly web applications using React.js, Node.js,
              and other cutting-edge technologies.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              My journey in web development started during my education, where I developed a
              strong understanding of data structures, algorithms, and software design principles.
              Since then, I've worked on various projects that have helped me master both
              front-end and back-end development.
            </p>
            <div className="flex justify-center">
              <a
                href={A_Naresh_Resume}
                download
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg
                hover:bg-blue-700 transition-colors duration-200"
              >
                <FileDown className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;