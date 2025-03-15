import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React.js', 'Vue.js', 'JavaScript','TypeScript', 'Tailwind CSS', 'Next.js', 'Quasar','CSS','HTML','Bootstrap','redux','context Api'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'Python', 'Flask', 'RESTful APIs'],
  },
  {
    title: 'Database',
    skills: ['SQL', 'MongoDB', 'DBMS'],
  },
  {
    title: 'Tools & Others',
    skills: ['Git', 'GitHub', 'Data Structures', 'Algorithms', 'Operating Systems', 'Networking'],
  },
  {
    title: 'Deployment',
    skills: ['Heroku', 'Netlify', 'Vercel', 'AWS', 'Docker'],
    // skills: ['Git', 'GitHub', 'Data Structures', 'Algorithms', 'Operating Systems', 'Networking'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-600 dark:text-gray-300">{skill}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                        <motion.div
                          className="bg-blue-600 h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: '90%' }}
                          transition={{ duration: 1, delay: 0.2 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;