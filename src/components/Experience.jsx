import React from 'react';
import { motion } from 'framer-motion';
import { useAppContext } from '../context/AppContext';

const Experience = () => {
  const { t } = useAppContext();

  return (
    <section id="experience" className="min-h-screen py-24 flex flex-col justify-center max-w-7xl mx-auto px-8">
      <h2 className="text-4xl font-bold mb-12 text-center neon-text-gradient inline-block self-center">{t.experience.title}</h2>
      <div className="flex flex-col gap-8 relative pl-8 border-l-2 border-neon-purple">
        {t.experience.items.map((exp, index) => (
          <motion.div 
            key={exp.id}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="glass-card relative"
          >
            <div className="absolute -left-[41px] top-8 w-4 h-4 rounded-full bg-neon-purple shadow-[0_0_10px_#bc13fe]"></div>
            <div className="text-neon-blue font-bold mb-2">{exp.year}</div>
            <h3 className="text-2xl font-semibold mb-1 text-text-primary flex flex-wrap items-center gap-2">
              {exp.role}
              {exp.type && (
                <>
                  <span className="text-text-secondary opacity-50 text-sm">•</span>
                  <span className="text-sm text-text-secondary opacity-80 font-normal mt-0.5">{exp.type}</span>
                </>
              )}
            </h3>
            <h4 className="text-lg text-text-secondary mb-4">{exp.company}</h4>
            <p className="text-text-secondary leading-relaxed">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
