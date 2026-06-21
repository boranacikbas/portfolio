import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Awards from './components/Awards';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import { useAppContext } from './context/AppContext';

function App() {
  const { t } = useAppContext();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Awards />
        <Certifications />
        <Contact />
      </main>
      <footer className="w-full border-t border-glass-border mt-16">
        <div className="max-w-7xl mx-auto px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-text-secondary">
          <p>© {new Date().getFullYear()} Boran AÇIKBAŞ. {t.contact.footer}</p>
          <div className="flex items-center gap-6">
            <a href="https://linkedin.com/in/boranacikbas" target="_blank" rel="noreferrer" className="hover:text-neon-blue transition-colors cursor-pointer" title="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="https://wa.me/905353712766" target="_blank" rel="noreferrer" className="hover:text-neon-blue transition-colors cursor-pointer" title="WhatsApp">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.891-4.443 9.891-9.892 0-2.643-1.029-5.129-2.896-6.996-1.867-1.867-4.354-2.896-6.997-2.896-5.448 0-9.892 4.444-9.892 9.892 0 1.954.545 3.822 1.58 5.485l-1.125 4.109 4.247-1.294zm8.125-10.231c-.347-.058-2.052-.942-2.37-1.05-.318-.109-.55-.164-.782.182-.232.346-.897 1.104-1.099 1.328-.203.224-.406.252-.754.075-2.091-1.05-3.328-1.96-4.66-3.827-.197-.276.195-.254.896-1.65.116-.232.058-.434-.029-.608-.087-.174-.782-1.884-1.071-2.58-.282-.676-.569-.584-.782-.594-.202-.009-.434-.011-.666-.011-.232 0-.608.087-.927.434-.319.347-1.216 1.186-1.216 2.893 0 1.707 1.245 3.359 1.419 3.59.174.231 2.449 3.738 5.932 5.244 3.483 1.506 3.483 1.004 4.12 1.004.637 0 2.052-.838 2.342-1.648.29-.81.29-1.505.203-1.65-.087-.145-.319-.232-.666-.406z"/></svg>
            </a>
            <a href="https://instagram.com/boranacikbas" target="_blank" rel="noreferrer" className="hover:text-neon-blue transition-colors cursor-pointer" title="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
