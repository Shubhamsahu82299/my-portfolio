import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa6';
import { HiOutlineCpuChip } from 'react-icons/hi2';
import myVisual from '../assets/IMG20250407172156-Photoroom.png';

const Hero = () => {
  // Mobile (sm/default) aur Desktop (md) ke liye safe positions
  const techIcons = [
    { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", pos: "top-0 right-4 md:top-15 md:right-14", delay: 0.2 },
    { name: "Node", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", pos: "top-1/4 left-0 md:-left-12", delay: 0.4 },
    { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", pos: "bottom-10 right-2 md:right-5 md:bottom-20", delay: 0.6 },
    { name: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", pos: "top-1/2 -right-2 md:-right-2", delay: 0.8 },
    { name: "PHP", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", pos: "bottom-1/4 left-0 md:-left-4", delay: 1.0 },
    { name: "C++", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", pos: "top-[-20px] left-1/4 md:top-15", delay: 1.2 },
  ];
const scrollToProjects = () => {
  const element = document.getElementById('projects');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#030712]">
      
      {/* Background Glows - Reduced size for mobile to prevent performance lag */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-25">
        <div className="absolute top-[10%] left-[5%] w-48 h-48 md:w-80 md:h-80 bg-blue-600 rounded-full blur-[80px] md:blur-[130px]"></div>
        <div className="absolute bottom-[10%] right-[5%] w-48 h-48 md:w-80 md:h-80 bg-emerald-500 rounded-full blur-[80px] md:blur-[130px]"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
        
        {/* LEFT: Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 md:space-y-8 z-20">
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-blue-500/5"
          >
            <HiOutlineCpuChip className="animate-pulse text-sm flex-shrink-0" /> 
            <span className="truncate">GATE 2026 QUALIFIED | SCORE: 468</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter text-white leading-[0.9] md:leading-[0.85]"
          >
            MERN <br className="hidden sm:block" />
            <span className="text-blue-600">STACK</span> <br />
            <span className="text-white/10 uppercase">Dev.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-sm sm:text-base md:text-xl max-w-md leading-relaxed font-medium px-2 sm:px-0"
          >
            Building high-performance web apps with <span className="text-white font-bold">React & Node.js</span>. 
            Algorithm enthusiast.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-5 w-full"
          >
           <a href="#projects" className="w-full sm:w-auto">
  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 md:px-10 md:py-4 rounded-full font-bold transition-all flex items-center justify-center gap-3 shadow-xl active:scale-95 group text-sm md:text-base">
    My Projects 
    <FaArrowRight className="group-hover:translate-x-1.5 transition-transform" />
  </button>
</a>
            <div className="flex items-center gap-6 text-gray-500 pt-2 sm:pt-0">
              <a href="https://github.com/Shubhamsahu82299" target="_blank" rel="noreferrer" className="hover:text-white transition-all transform hover:scale-110"><FaGithub size={24} className="md:w-7 md:h-7" /></a>
              <a href="https://www.linkedin.com/in/shubham-kumar-sahu-204167262" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-all transform hover:scale-110"><FaLinkedin size={24} className="md:w-7 md:h-7" /></a>
            </div>
          </motion.div>
        </div>

        {/* RIGHT: Photo & Helix Animation */}
        <div className="relative flex items-center justify-center mt-6 md:mt-20 px-4">
          
          {/* Helical Orbiting Rings - Scaled down for small mobiles */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none scale-75 sm:scale-90 md:scale-100">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute w-[260px] h-[340px] md:w-[320px] md:h-[400px] border-2 border-blue-500/20 rounded-[100%] shadow-[0_0_40px_rgba(59,130,246,0.1)]"
              style={{ transform: 'rotateX(70deg) rotateY(15deg)' }}
            ></motion.div>
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute w-[280px] h-[300px] md:w-[340px] md:h-[360px] border border-emerald-500/10 rounded-[100%]"
              style={{ transform: 'rotateX(50deg) rotateY(-20deg)' }}
            ></motion.div>
          </div>

          {/* Centered Photo Section */}
          <div className="relative z-10 w-full max-w-[280px] sm:max-w-[320px] md:max-w-[520px]">
            <div className="absolute inset-0 bg-blue-600/20 blur-[60px] md:blur-[110px] rounded-full -z-10 animate-pulse"></div>
            
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              src={myVisual} 
              alt="Shubham Sahu" 
              className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] brightness-110"
            />
            
            {/* Tech Icons Orbiting - Smaller on mobile */}
            {techIcons.map((icon, index) => (
              <motion.div 
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: icon.delay, duration: 0.5 }}
                className={`absolute ${icon.pos} p-1.5 md:p-3 bg-slate-900/90 backdrop-blur-md border border-white/10 rounded-[12px] md:rounded-[20px] shadow-2xl z-20 transition-all hover:scale-110`}
              >
                <motion.img 
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: icon.delay }}
                  src={icon.src} 
                  className="w-5 h-5 md:w-10 md:h-10" 
                  alt={icon.name}
                />
              </motion.div>
            ))}
          </div>

          {/* Bottom Floating Badge - Improved mobile positioning */}
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute bottom-[-30px] md:bottom-[80px] left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-[70px] w-max z-30 px-4 py-2 md:px-5 md:py-2.5 rounded-xl md:rounded-2xl bg-emerald-500 text-slate-950 font-black text-[9px] md:text-xs uppercase tracking-widest shadow-2xl"
          >
            Available for Hire
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;