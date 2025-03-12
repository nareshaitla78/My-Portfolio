import React from 'react';
import { motion } from 'framer-motion';
import { Github, Link as LinkIcon } from 'lucide-react';
import ledflex from '../assets/ledflex.png';
import emojigame from '../assets/emojigame.png';
const projects = [
  {
    name: 'User Authentication System',
    description: 'A secure authentication system with JWT tokens and role-based access control.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/nareshaitla78/User-Authentication-System',
    live: 'https://huntforr.netlify.app/',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=500&h=300&fit=crop'
  },
  {
    name: 'Emoji Game',
    description: 'Interactive emoji matching game with React.js and Tailwind CSS.',
    technologies: ['React.js', 'Tailwind CSS'],
    github: '',
    live: 'https://nareshaitla.ccbp.tech/',
    image:  emojigame
  },
  {
    name: 'LedFlex Home Page',
    description: 'Modern and responsive home page for LedFlex company.',
    technologies: ['Vue.js', 'Quasar', 'Tailwind CSS'],
    github: 'https://github.com/nareshaitla78/Homepage-Design-for-LEDFlex',
    live: 'https://ledflexgroup.netlify.app/',
    image: ledflex
  },
  {
    name: 'Self-Registration Form',
    description: 'Dynamic registration form with validation and backend integration.',
    technologies: ['React.js', 'Tailwind CSS','Flask'],
    github: 'https://github.com/nareshaitla78/MOSIP-Self-Registration-Form',
    live: 'https://selfregistrationform.netlify.app/',
    image: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=500&h=300&fit=crop'
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300"
              >
                <div className="relative overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <motion.h3 
                    className="text-xl font-semibold mb-2 dark:text-white"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {project.name}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600 dark:text-gray-300 mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {project.description}
                  </motion.p>
                  <motion.div 
                    className="flex flex-wrap gap-2 mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </motion.div>
                  <motion.div 
                    className="flex space-x-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                    >
                      <Github className="w-5 h-5 mr-1" />
                      GitHub
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                    >
                      <LinkIcon className="w-5 h-5 mr-1" />
                      Live Demo
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;