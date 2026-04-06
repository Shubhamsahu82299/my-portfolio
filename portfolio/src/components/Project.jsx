import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaFolder } from 'react-icons/fa';

const ProjectCard = ({ title, description, tech, github, demo }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -8 }}
    className="group relative bg-[#0a0f1d] border border-white/5 rounded-[28px] overflow-hidden transition-all duration-500"
  >
    {/* Visual Header */}
    <div className="h-40 bg-gradient-to-br from-blue-600/10 to-emerald-500/10 flex items-center justify-center relative overflow-hidden">
      <FaCode size={50} className="text-white/5 group-hover:scale-125 group-hover:text-blue-500/20 transition-all duration-700" />
      
      {/* Desktop Hover Buttons */}
      <div className="absolute inset-0 bg-[#030712]/60 opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex items-center justify-center gap-5">
        <a href={github} target="_blank" rel="noreferrer" className="p-3 bg-white text-black rounded-full hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110">
          <FaGithub size={20} />
        </a>
        {demo && (
          <a href={demo} target="_blank" rel="noreferrer" className="p-3 bg-white text-black rounded-full hover:bg-emerald-500 hover:text-white transition-all transform hover:scale-110">
            <FaExternalLinkAlt size={18} />
          </a>
        )}
      </div>
    </div>

    <div className="p-6 space-y-4">
      <div className="flex flex-wrap gap-2">
        {tech.map((t, i) => (
          <span key={i} className="text-[9px] font-bold uppercase tracking-widest text-blue-400 bg-blue-400/5 border border-blue-400/10 px-2 py-0.5 rounded">
            {t}
          </span>
        ))}
      </div>
      
      <h3 className="text-xl font-black text-white group-hover:text-blue-500 transition-colors">{title}</h3>
      <p className="text-gray-400 text-xs leading-relaxed min-h-[45px]">
        {description}
      </p>

      {/* Mobile-friendly Action Links */}
      <div className="flex md:hidden gap-5 pt-2 border-t border-white/5">
        <a href={github} target="_blank" rel="noreferrer" className="text-blue-500 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">Github <FaExternalLinkAlt size={10}/></a>
        {demo && <a href={demo} target="_blank" rel="noreferrer" className="text-emerald-500 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">Visit Site <FaExternalLinkAlt size={10}/></a>}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const mainProjects = [
    {
      title: "Weather App",
      description: "Real-time weather dashboard using OpenWeather API. Features dynamic backgrounds based on climate conditions.",
      tech: ["React.js", "REST API", "Tailwind"],
      github: "https://github.com/Shubhamsahu82299/weather-app",
      demo: "https://shubhamsahu82299.github.io/weather-app/"
    },
    {
      title: "Easy Learning",
      description: "Educational frontend platform with smooth Framer Motion transitions and course management UI.",
      tech: ["React.js", "Framer Motion", "Tailwind"],
      github: "https://github.com/Shubhamsahu82299/easy-learning-frontend",
      demo: "https://shubhamsahu82299.github.io/easy-learning-frontend/"
    },
    {
      title: "Real-time Chat",
      description: "Messaging application focusing on instant UI updates and responsive chat layouts.",
      tech: ["React.js", "MongoDB", "Socket"],
      github: "https://github.com/Shubhamsahu82299/chat-app",
      demo: "https://chat-app-two-psi-37.vercel.app/"
    }
  ];

  const otherProjects = [
    { name: "CRUD-REACT", tech: "React/State", link: "https://github.com/Shubhamsahu82299/CRUD-REACT" },
    { name: "Password Generator", tech: "JS Logic", link: "https://shubhamsahu82299.github.io/password-generator/" },
    { name: "TodoList React", tech: "React Hooks", link: "https://shubhamsahu82299.github.io/todolist-react/" },
    { name: "E-commerce PHP", tech: "PHP/MySQL", link: "#" }
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-[#030712] px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 border-l-4 border-blue-600 pl-6">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-3 uppercase">
            Work <span className="text-blue-600">Archive.</span>
          </h2>
         {/*  <p className="text-gray-500 max-w-md font-medium text-xs md:text-sm">
           
          </p> */}
           <motion.p 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-gray-500 max-w-md font-medium text-sm md:text-base leading-relaxed"
                    >
                     A selection of projects ranging from complex web systems to creative UI experiments.</motion.p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mainProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* Other Small Projects */}
        <div className="mt-20">
          <h3 className="text-gray-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-8 flex items-center gap-3 italic">
            <FaFolder className="text-blue-600" /> More Noteworthy Experiments
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherProjects.map((other, idx) => (
              <a 
                key={idx} 
                href={other.link} 
                target="_blank" 
                rel="noreferrer"
                className="p-5 bg-[#0a0f1d] border border-white/5 rounded-2xl flex items-center justify-between group hover:border-blue-500/30 transition-all hover:bg-[#0d142b]"
              >
                <div>
                  <p className="text-gray-200 font-bold text-sm mb-1">{other.name}</p>
                  <p className="text-blue-500 text-[9px] font-mono uppercase">{other.tech}</p>
                </div>
                <FaGithub size={18} className="text-gray-600 group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;