import React from 'react';
import { motion } from 'framer-motion';
import { useAppContext } from '../context/AppContext';

const Education = () => {
  const { t } = useAppContext();

  return (
    <section id="education" className="min-h-screen py-24 flex flex-col justify-center max-w-7xl mx-auto px-8">
      <h2 className="text-4xl font-bold mb-12 text-center neon-text-gradient inline-block self-center">{t.education.title}</h2>
      <div className="flex flex-col gap-8 relative pl-8 border-l-2 border-neon-blue">
        {t.education.items.map((edu, index) => (
          <motion.div 
            key={edu.id}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="glass-card relative"
          >
            <div className="absolute -left-[41px] top-8 w-4 h-4 rounded-full bg-neon-blue shadow-[0_0_10px_#00f3ff]"></div>
            <div className="text-neon-purple font-bold mb-2">{edu.year}</div>
            <h3 className="text-2xl font-semibold mb-1 text-text-primary">{edu.institution}</h3>
            <h4 className={`text-lg text-text-secondary ${edu.gpa ? 'mb-1' : 'mb-4'}`}>{edu.degree}</h4>
            {edu.gpa && <div className="text-sm text-text-secondary opacity-75 font-medium mb-4 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-neon-blue"></span> GPA: {edu.gpa}</div>}
            <p className="text-text-secondary leading-relaxed">{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
