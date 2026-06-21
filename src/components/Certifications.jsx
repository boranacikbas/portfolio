import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Certifications = () => {
  const { t } = useAppContext();

  return (
    <section id="certifications" className="py-24 flex flex-col justify-center max-w-7xl mx-auto px-8">
      <h2 className="text-4xl font-bold mb-12 text-center neon-text-gradient inline-block self-center">{t.certifications.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {t.certifications.items.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="glass-card flex flex-col items-start"
          >
            <div className="p-3 bg-neon-blue/10 rounded-lg mb-4 text-neon-blue">
              <Award size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-text-primary">{cert.title}</h3>
            <p className="text-text-secondary mb-1">{cert.issuer}</p>
            <p className="text-text-secondary text-sm mb-6 flex-grow opacity-70">{cert.date}</p>
            
            <a href={cert.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-neon-purple hover:text-neon-blue transition-colors text-sm font-medium mt-auto">
              {t.certifications.btnView} <ExternalLink size={16} />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
