import React from 'react';
import { motion } from 'framer-motion';
import { Code, ExternalLink } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Projects = () => {
  const { t } = useAppContext();

  return (
    <section id="projects" className="min-h-screen py-24 flex flex-col justify-center max-w-7xl mx-auto px-8">
      <h2 className="text-4xl font-bold mb-12 text-center neon-text-gradient inline-block self-center">{t.projects.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {t.projects.items.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="glass-card flex flex-col"
          >
            <h3 className="text-2xl font-semibold mb-4 text-text-primary">{project.title}</h3>
            <p className="text-text-secondary flex-grow mb-6 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t, i) => (
                <span key={i} className="text-sm px-3 py-1 bg-neon-blue/10 text-neon-blue rounded-full border border-neon-blue">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-4 items-center">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="text-text-secondary hover:text-neon-blue transition-colors">
                  <Code size={24} />
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer" className="text-text-secondary hover:text-neon-purple transition-colors">
                  <ExternalLink size={24} />
                </a>
              )}
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer" className="text-neon-blue border border-neon-blue px-4 py-2 rounded-full text-sm font-medium hover:bg-neon-blue/10 transition-colors flex items-center gap-2">
                  <ExternalLink size={16} /> {project.linkText}
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
