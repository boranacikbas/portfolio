import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Sun, Moon, Globe } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Navbar = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  
  const { lang, theme, toggleTheme, changeLanguage, t } = useAppContext();

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <nav 
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed top-0 left-0 w-full h-20 bg-bg-primary/80 backdrop-blur-lg border-b border-glass-border z-50 flex items-center overflow-hidden transition-colors duration-500"
    >
      {/* Her zaman çalışan akan canlı arka plan */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 via-neon-purple/20 to-neon-blue/10 bg-[length:200%_auto] animate-gradient-x -z-10"
      ></div>

      {/* Ekstra olarak mouse takibi yapan parlak glow efekti */}
      <div 
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 mix-blend-screen -z-10"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `
            radial-gradient(150px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 243, 255, 0.4), transparent 50%),
            radial-gradient(100px circle at ${mousePos.x + 20}px ${mousePos.y - 10}px, rgba(188, 19, 254, 0.4), transparent 50%)
          `
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-8 w-full flex justify-between items-center z-10">
        <div className="text-2xl font-bold tracking-wider">
          <Link to="hero" smooth={true} duration={500} className="cursor-pointer flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden border border-glass-border/50 shadow-lg shadow-neon-blue/20 group-hover:shadow-neon-purple/40 transition-all duration-300 transform group-hover:scale-105">
              <img src="/logo.png" alt="BA Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-text-primary hidden sm:block">
              Boran<span className="text-neon-purple">.</span>
            </span>
          </Link>
        </div>
        
        <div className="flex items-center gap-8">
          <ul className="hidden lg:flex gap-8 list-none m-0 p-0 text-text-primary">
            <li>
              <Link to="about" smooth={true} duration={500} activeClass="text-neon-blue after:w-full" spy={true} className="cursor-pointer font-medium hover:text-neon-blue transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-neon-blue after:transition-all after:duration-300 hover:after:w-full">
                {t.nav.about}
              </Link>
            </li>
            <li>
              <Link to="education" smooth={true} duration={500} activeClass="text-neon-blue after:w-full" spy={true} className="cursor-pointer font-medium hover:text-neon-blue transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-neon-blue after:transition-all after:duration-300 hover:after:w-full">
                {t.nav.education}
              </Link>
            </li>
            <li>
              <Link to="experience" smooth={true} duration={500} activeClass="text-neon-blue after:w-full" spy={true} className="cursor-pointer font-medium hover:text-neon-blue transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-neon-blue after:transition-all after:duration-300 hover:after:w-full">
                {t.nav.experience}
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500} activeClass="text-neon-blue after:w-full" spy={true} className="cursor-pointer font-medium hover:text-neon-blue transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-neon-blue after:transition-all after:duration-300 hover:after:w-full">
                {t.nav.projects}
              </Link>
            </li>
            <li>
              <Link to="awards" smooth={true} duration={500} activeClass="text-neon-blue after:w-full" spy={true} className="cursor-pointer font-medium hover:text-neon-blue transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-neon-blue after:transition-all after:duration-300 hover:after:w-full">
                {t.nav.awards}
              </Link>
            </li>
            <li>
              <Link to="certifications" smooth={true} duration={500} activeClass="text-neon-blue after:w-full" spy={true} className="cursor-pointer font-medium hover:text-neon-blue transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-neon-blue after:transition-all after:duration-300 hover:after:w-full">
                {t.nav.certifications}
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} activeClass="text-neon-blue after:w-full" spy={true} className="cursor-pointer font-medium hover:text-neon-blue transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-neon-blue after:transition-all after:duration-300 hover:after:w-full">
                {t.nav.contact}
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-4 border-l border-glass-border pl-4">
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-glass-bg transition-colors text-text-primary cursor-pointer">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={() => changeLanguage(lang === 'tr' ? 'en' : 'tr')} 
              className="flex items-center gap-1.5 p-2 rounded-full hover:bg-glass-bg transition-colors text-sm font-bold text-text-primary cursor-pointer"
            >
              <Globe size={18} />
              {lang === 'tr' ? 'EN' : 'TR'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
