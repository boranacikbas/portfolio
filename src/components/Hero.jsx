import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FileText, MapPin } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Hero = () => {
  const { t } = useAppContext();

  return (
    <section id="hero" className="min-h-screen pt-[120px] pb-24 flex flex-col justify-center items-center text-center max-w-7xl mx-auto px-8">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl flex flex-col items-center"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
          {t.hero.greeting} <br className="md:hidden" /><span className="neon-text-gradient whitespace-nowrap">Boran AÇIKBAŞ</span>
        </h1>
        <div className="flex items-center gap-2 text-xl text-text-secondary mb-8 opacity-80">
          <MapPin size={22} className="text-neon-purple" />
          <span>{t.hero.location}</span>
        </div>
        <p className="text-xl text-text-secondary mb-12 leading-relaxed">
          {t.hero.description}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="projects" smooth={true} duration={500} className="neon-btn cursor-pointer">
            {t.hero.btnProjects}
          </Link>
          <Link to="contact" smooth={true} duration={500} className="neon-btn border-neon-purple before:bg-gradient-to-r before:from-neon-purple before:to-neon-blue hover:shadow-[0_0_15px_#bc13fe] cursor-pointer">
            {t.hero.btnContact}
          </Link>
          <a href={t.hero.cvLink} target="_blank" rel="noreferrer" className="neon-btn border-text-secondary text-text-secondary before:bg-text-secondary/10 hover:border-text-primary hover:text-text-primary hover:shadow-[0_0_15px_rgba(150,150,150,0.3)] cursor-pointer">
            <FileText size={18} /> {t.hero.btnCV}
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
