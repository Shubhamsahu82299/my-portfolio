import React, { useState } from 'react';
import { Code2, Briefcase, Award, FolderKanban, Mail, FileText, Menu, X, Send } from 'lucide-react';
import logoGif from '../assets/logo.gif';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Skills", href: "#skills", icon: <Code2 size={18} /> },
    { label: "Experience", href: "#experience", icon: <Briefcase size={18} /> }, // ID match kiye journey se
    { label: "Projects", href: "#projects", icon: <FolderKanban size={18} /> },
    { label: "Contact", href: "#contact", icon: <Mail size={18} /> }, // Contact Added
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/90 backdrop-blur-xl border-b border-white/5">
      <div className="w-full px-6 py-4 flex justify-between items-center">
        
        {/* Name/Logo */}
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-[50%] flex items-center justify-center overflow-hidden shadow-lg shadow-blue-500/20">
            <img src={logoGif} alt="Shubham Logo" className=" h-full w-full object-cover" />
          </div>
          <h1 className="text-xl font-bold tracking-tight text-white">
            Shubham <span className="text-blue-500">Kumar Sahu</span>
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-400 text-sm font-medium">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-white transition-colors relative group">
              {link.label}
              {/* Subtle underline hover effect */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Desktop Resume Button & Contact Action */}
        <div className="hidden md:flex items-center gap-4">
          <a 
            href="resume.pdf" 
            download="Shubham_Sahu_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-white px-4 py-2 text-sm font-bold transition-all flex items-center gap-2"
          >
            <FileText size={16} /> Resume
          </a>
          
          <a 
            href="#contact" 
            className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg shadow-blue-600/20 active:scale-95"
          >
            Hire Me <Send size={14} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white p-2 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-white/10 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'}`}>
       <div className={`md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-2xl border-b border-white/10 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'}`}>
  <div className="px-5 py-7 flex flex-col gap-5 shadow-2xl">
    {navLinks.map((link) => (
      <a 
        key={link.label} 
        href={link.href} 
        onClick={() => setIsOpen(false)}
        className="flex items-center gap-4 text-gray-300 text-base font-semibold hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-white/5"
      >
        <span className="text-blue-500 bg-blue-500/10 p-2 rounded-lg">
          {/* React Icons ya Lucide icons yahan auto-fit honge */}
          {React.cloneElement(link.icon, { size: 20 })}
        </span>
        {link.label}
      </a>
    ))}
    
    <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-2" />
    
    {/* Mobile Resume Download Button - Bulletproof Path */}
    <a 
      href={`${import.meta.env.BASE_URL}resume.pdf`} // Ye GitHub Pages par kabhi fail nahi hoga
      download="Shubham_Sahu_Resume.pdf"
      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 active:scale-95 transition-all shadow-lg shadow-blue-600/20"
    >
      <FileText size={20} /> Download Resume
    </a>
  </div>
</div>
      </div>
    </nav>
  );
};

export default Navbar;