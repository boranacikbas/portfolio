import React from 'react';
import { motion } from 'framer-motion';
import { useAppContext } from '../context/AppContext';

const About = () => {
  const { t } = useAppContext();

  return (
    <section id="about" className="py-24 flex flex-col justify-center max-w-7xl mx-auto px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-16"
      >
        {/* Left Side: About Text */}
        <div>
          <h2 className="text-4xl font-bold mb-8 neon-text-gradient inline-block">{t.about.title}</h2>
          <p className="text-lg text-text-secondary leading-relaxed whitespace-pre-line">
            {t.about.description}
          </p>
        </div>

        {/* Right Side: Skills */}
        <div className="glass-card flex flex-col relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-neon-blue/10 rounded-full blur-3xl -z-10 group-hover:bg-neon-blue/20 transition-all duration-500"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-neon-purple/10 rounded-full blur-3xl -z-10 group-hover:bg-neon-purple/20 transition-all duration-500"></div>
          
          <h3 className="text-2xl font-bold mb-6 text-text-primary flex items-center gap-2">
            <span className="w-2 h-8 rounded-full bg-gradient-to-b from-neon-blue to-neon-purple"></span>
            {t.about.skillsTitle}
          </h3>
          
          <div className="flex flex-wrap gap-3">
            {t.about.skills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="px-4 py-2 rounded-full text-sm font-medium border border-text-secondary/30 text-text-secondary hover:border-neon-blue hover:text-neon-blue hover:shadow-[0_0_10px_rgba(0,243,255,0.3)] hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
