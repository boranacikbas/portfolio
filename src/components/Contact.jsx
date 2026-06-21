import React from 'react';
import { motion } from 'framer-motion';
import { Code, Briefcase, Mail, ExternalLink, Send } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Contact = () => {
  const { t } = useAppContext();

  return (
    <section id="contact" className="min-h-screen py-24 flex flex-col justify-center max-w-7xl mx-auto px-8 items-center text-center">
      <h2 className="text-4xl font-bold mb-12 neon-text-gradient inline-block self-center">{t.contact.title}</h2>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="glass-card max-w-4xl w-full p-8 md:p-12"
      >
        <p className="text-xl text-text-secondary mb-8 leading-relaxed">
          {t.contact.description}
        </p>
        
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          <a href="mailto:boranacikbas@gmail.com" className="flex items-center gap-2 text-lg text-neon-blue hover:text-neon-purple transition-colors">
            <Mail size={24} /> {t.contact.emailLink}
          </a>
          <a href="https://linkedin.com/in/boranacikbas" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-lg text-neon-blue hover:text-neon-purple transition-colors">
            <Briefcase size={24} /> LinkedIn
          </a>
          <a href="https://github.com/boranacikbas" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-lg text-neon-blue hover:text-neon-purple transition-colors">
            <Code size={24} /> GitHub
          </a>
          <a href="https://kaggle.com/boranakba" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-lg text-neon-blue hover:text-neon-purple transition-colors">
            <ExternalLink size={24} /> Kaggle
          </a>
          <a href="https://huggingface.co/boranacikbas" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-lg text-neon-blue hover:text-neon-purple transition-colors">
            <ExternalLink size={24} /> HuggingFace
          </a>
        </div>

        {/* İletişim Formu */}
        <div className="border-t border-glass-border pt-12 max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 text-text-primary">{t.contact.form.title}</h3>
          
          {/* LÜTFEN YOUR_FORM_ID KISMINI FORMSPREE'DEN ALDIĞINIZ ID İLE DEĞİŞTİRİN */}
          <form action="https://formspree.io/f/mlgyrayn" method="POST" className="flex flex-col gap-6 text-left">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-text-secondary font-medium">{t.contact.form.nameLabel}</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                placeholder={t.contact.form.namePlaceholder} 
                className="w-full bg-bg-primary/50 border border-glass-border rounded-lg p-4 text-text-primary focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all" 
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-text-secondary font-medium">{t.contact.form.emailLabel}</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                placeholder={t.contact.form.emailPlaceholder} 
                className="w-full bg-bg-primary/50 border border-glass-border rounded-lg p-4 text-text-primary focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all" 
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-text-secondary font-medium">{t.contact.form.messageLabel}</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                required 
                placeholder={t.contact.form.messagePlaceholder} 
                className="w-full bg-bg-primary/50 border border-glass-border rounded-lg p-4 text-text-primary focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all resize-y" 
              ></textarea>
            </div>

            <button type="submit" className="neon-btn mt-4 self-center w-full sm:w-auto px-8">
              <Send size={18} /> {t.contact.form.submitBtn}
            </button>
          </form>
        </div>

      </motion.div>
    </section>
  );
};

export default Contact;
