import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, ExternalLink } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Awards = () => {
  const { t } = useAppContext();

  return (
    <section id="awards" className="min-h-screen py-24 flex flex-col justify-center max-w-7xl mx-auto px-8">
      <h2 className="text-4xl font-bold mb-12 text-center neon-text-gradient inline-block self-center">{t.awards.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {t.awards.items.map((award, index) => (
          <motion.div
            key={award.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="glass-card flex flex-col items-start relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-neon-blue to-neon-purple"></div>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-neon-blue/10 rounded-lg text-neon-blue">
                <Trophy size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-text-primary leading-tight">{award.title}</h3>
                <h4 className="text-md text-text-secondary font-medium mt-1">{award.organization}</h4>
              </div>
            </div>
            
            <div className="text-sm text-text-secondary opacity-75 font-medium mb-4 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-purple"></span> {award.date}
            </div>
            
            <p className="text-text-secondary leading-relaxed flex-grow">{award.description}</p>
            {award.link && (
              <a href={award.link} target="_blank" rel="noreferrer" className="mt-6 self-start text-neon-blue border border-neon-blue px-4 py-2 rounded-full text-sm font-medium hover:bg-neon-blue/10 transition-colors flex items-center gap-2">
                <ExternalLink size={16} /> {award.linkText}
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Awards;
