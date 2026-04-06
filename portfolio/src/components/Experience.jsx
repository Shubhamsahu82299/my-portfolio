import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaCode } from 'react-icons/fa'; 
import { FaDownload } from 'react-icons/fa6';

const ExperienceCard = ({ company, role, duration, points, icon, color, certLink }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    // Mobile par pl-4, Laptop par pl-10
    className="relative pl-4 md:pl-10 pb-10 last:pb-0 group"
  >
    {/* Timeline Vertical Line */}
    <div className="absolute left-[7px] md:left-[19px] top-0 h-full w-[2px] bg-white/5 group-last:h-0"></div>
    
    {/* Timeline Dot */}
    <div className={`absolute left-0 md:left-2 top-0 w-4 h-4 md:w-6 md:h-6 rounded-full border-2 md:border-4 border-[#030712] flex items-center justify-center z-10 ${color}`}>
       <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-white animate-pulse"></div>
    </div>

    {/* Card Internal Padding */}
    <div className="bg-[#0a0f1d] border border-white/5 p-4 md:p-8 rounded-[20px] md:rounded-[32px] hover:border-blue-500/30 transition-all shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        <div>
          <h3 className="text-base md:text-2xl font-bold text-white flex items-center gap-2">
            {icon} {role}
          </h3>
          <p className="text-blue-500 font-semibold text-xs md:text-lg">{company}</p>
        </div>
        
        {certLink && (
          <a 
            href={certLink} 
            download
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 md:px-5 md:py-2.5 bg-blue-600/10 border border-blue-500/20 rounded-lg text-blue-400 text-[9px] md:text-sm font-bold hover:bg-blue-600 hover:text-white transition-all w-max active:scale-95"
          >
            <FaDownload /> Certificate
          </a>
        )}
      </div>

      <p className="text-[9px] md:text-xs text-gray-500 font-mono mb-4 inline-block px-2 py-0.5 bg-white/5 rounded-md tracking-wider">
        {duration}
      </p>

      <ul className="space-y-3">
        {points.map((point, index) => (
          <li key={index} className="flex gap-3 text-[11px] md:text-base text-gray-400 leading-relaxed">
            <span className="text-blue-600 mt-1.5">•</span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const Experience = () => {
  return (
    // Mobile par px-2 (full width), Laptop par px-6
    <section id="experience" className="py-16 md:py-28 bg-[#030712] px-2 md:px-6">
      <div className="max-w-7xl mx-auto"> {/* Max width badha di laptop ke liye */}
        
        {/* Header - Aligned with Skills & Projects */}
        <div className="mb-14 border-l-4 border-blue-600 pl-4 md:pl-8">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-3 uppercase">
            Professional <span className="text-blue-600">Journey.</span>
          </h2>
          {/* <p className="text-gray-500 font-medium text-xs md:text-lg max-w-2xl leading-relaxed">
           
          </p> */}
           <motion.p 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-gray-500 max-w-md font-medium text-sm md:text-base leading-relaxed"
                              >
                               Hands-on expertise gained through high-impact internships in Machine Learning and Full-Stack Development.</motion.p>
        </div>

        {/* Card Container - Desktop par thoda padding right bhi di hai */}
        <div className="mt-10 md:pr-10">
          <ExperienceCard 
            role="Machine Learning Intern"
            company="1stop.ai"
            duration="Aug 2024 – Sep 2024"
            icon={<FaBrain className="text-purple-500" />}
            color="bg-purple-500"
            certLink="/Shubham_Aug_2024_internship_53992.pdf" 
            points={[
              "Developed a Diabetes Prediction Model using ML techniques to analyze medical datasets with high accuracy.",
              "Focused on end-to-end Machine Learning pipelines, including data preprocessing and model fine-tuning."
            ]}
          />

          <ExperienceCard 
            role="Web Development Intern"
            company="Acmegrade"
            duration="Aug 2023 – Oct 2023"
            icon={<FaCode className="text-emerald-500" />}
            color="bg-emerald-500"
            certLink="/Shubham_Kumar_Sahu_Internship_Completion.pdf"
            points={[
              "Architected a functional e-commerce web application utilizing PHP and MySQL for robust backend performance.",
              "Designed and implemented high-performance, responsive web interfaces using HTML5, CSS3, and JavaScript."
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;