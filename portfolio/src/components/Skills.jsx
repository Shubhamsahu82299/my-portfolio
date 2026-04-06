import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLayerGroup, FaDatabase, FaReact, FaNodeJs, FaPhp, FaJava, FaPython } from 'react-icons/fa'; 
import { FaWrench } from 'react-icons/fa6';
import { SiMongodb, SiCplusplus, SiJavascript } from 'react-icons/si';

const SkillCard = ({ title, icon, skills, color }) => (
  <motion.div 
    whileHover={{ y: -5 }} // Hover lift thoda kam kiya
    className="relative p-5 md:p-6 bg-[#0a0f1d] border border-white/5 rounded-[24px] overflow-hidden group transition-all"
  >
    {/* Background Glow - Chota kiya */}
    <div className={`absolute -top-12 -right-12 w-24 h-24 ${color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`}></div>
    
    <div className="relative z-10 space-y-4">
      {/* Icon size chota kiya */}
      <div className={`w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl ${color.replace('bg-', 'text-')}`}>
        {icon}
      </div>
      
      <h3 className="text-lg font-bold text-white tracking-tight">{title}</h3>
      
      {/* Skills tags ko compact kiya */}
      <div className="flex flex-wrap gap-1.5">
        {skills.map((skill, index) => (
          <span key={index} className="px-2.5 py-1 bg-white/5 border border-white/5 rounded-lg text-[9px] md:text-[10px] text-gray-400 font-medium hover:border-blue-500/30 hover:text-white transition-all">
            {skill}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24 bg-[#030712] px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header - Objective se match kiya */}
        <div className="mb-12 border-l-4 border-blue-600 pl-5">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-3 uppercase">
            Technical <span className="text-blue-600">Arsenal.</span>
          </h2>
          {/* <p className="text-gray-500 max-w-md font-medium text-xs md:text-sm leading-relaxed">
           
          </p> */}
          <motion.p 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-gray-500 max-w-md font-medium text-sm md:text-base leading-relaxed"
                    >
                     Bridging the gap between low-level logic and high-level scalable architectures.</motion.p>
        </div>

        {/* Skills Grid - Compact Gap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          
          <SkillCard 
            title="Programming"
            icon={<FaCode />}
            color="bg-blue-500"
            skills={["Java", "Python", "C", "C++", "JavaScript"]}
          />

          <SkillCard 
            title="Web Dev"
            icon={<FaLayerGroup />}
            color="bg-emerald-500"
            skills={["React.js", "Node.js", "PHP", "Tailwind", "Bootstrap"]}
          />

          <SkillCard 
            title="Databases"
            icon={<FaDatabase />}
            color="bg-purple-500"
            skills={["MongoDB", "MySQL"]}
          />

          <SkillCard 
            title="Tools & Others"
            icon={<FaWrench />}
            color="bg-orange-500"
            skills={["Git", "GitHub", "VS Code", "IoT", "ML Basics"]}
          />

        </div>

        {/* Floating Tech Bar - Compact Size */}
        <div className="mt-16 py-8 border-t border-white/5 flex flex-wrap justify-center gap-6 md:gap-10 opacity-20 grayscale hover:grayscale-0 transition-all duration-700">
           <FaReact size={28} className="hover:text-[#61DAFB] cursor-pointer" />
           <FaNodeJs size={28} className="hover:text-[#339933] cursor-pointer" />
           <SiMongodb size={28} className="hover:text-[#47A248] cursor-pointer" />
           <FaJava size={28} className="hover:text-[#007396] cursor-pointer" />
           <FaPython size={28} className="hover:text-[#3776AB] cursor-pointer" />
           <FaPhp size={28} className="hover:text-[#777BB4] cursor-pointer" />
           <SiJavascript size={28} className="hover:text-[#F7DF1E] cursor-pointer" />
           <SiCplusplus size={28} className="hover:text-[#00599C] cursor-pointer" />
        </div>
      </div>
    </section>
  );
};

export default Skills;