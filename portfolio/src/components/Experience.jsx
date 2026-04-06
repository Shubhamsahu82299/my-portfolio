import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaCode } from 'react-icons/fa'; 
import { FaDownload } from 'react-icons/fa6';

const ExperienceCard = ({ company, role, duration, points, icon, color, certLink }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="relative pl-6 md:pl-10 pb-10 last:pb-0 group"
  >
    <div className="absolute left-[9px] md:left-[19px] top-0 h-full w-[2px] bg-white/5 group-last:h-0"></div>
    
    <div className={`absolute left-0 md:left-2 top-0 w-4.5 h-4.5 md:w-6 md:h-6 rounded-full border-2 md:border-4 border-[#030712] flex items-center justify-center z-10 ${color}`}>
        <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
    </div>

    <div className="bg-[#0a0f1d] border border-white/5 p-5 md:p-8 rounded-[20px] md:rounded-[32px] hover:border-blue-500/30 transition-all shadow-xl text-left">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
        <div className="min-w-0">
          <h3 className="text-lg md:text-2xl font-bold text-white flex items-center gap-2 flex-wrap">
            <span className="flex-shrink-0">{icon}</span> 
            <span className="break-words">{role}</span>
          </h3>
          <p className="text-blue-500 font-semibold text-sm md:text-lg mt-1">{company}</p>
        </div>
        
        {/* Fixed Download Link Logic */}
        {certLink && (
          <a 
            href={`${import.meta.env.BASE_URL}${certLink}`} 
            download
            target="_blank" 
            rel="noreferrer"
            type="application/pdf"
            className="flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 bg-blue-600/10 border border-blue-500/20 rounded-lg text-blue-400 text-xs md:text-sm font-bold hover:bg-blue-600 hover:text-white transition-all w-max active:scale-95 flex-shrink-0 shadow-lg"
          >
            <FaDownload /> Certificate
          </a>
        )}
      </div>

      <p className="text-[10px] md:text-xs text-gray-500 font-mono mb-4 inline-block px-2 py-1 bg-white/5 rounded-md tracking-wider border border-white/5">
        {duration}
      </p>

      <ul className="space-y-3">
        {points.map((point, index) => (
          <li key={index} className="flex gap-3 text-xs md:text-base text-gray-400 leading-relaxed">
            <span className="text-blue-600 mt-1.5 flex-shrink-0">•</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-28 bg-[#030712] px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 border-l-4 border-blue-600 pl-4 md:pl-8 text-left">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-4 uppercase">
            Professional <span className="text-blue-600">Journey.</span>
          </h2>
          <p className="text-gray-400 max-w-xl font-medium text-sm md:text-base leading-relaxed">
            Hands-on expertise gained through high-impact internships in Machine Learning and Full-Stack Development.
          </p>
        </div>

        <div className="mt-12 md:mt-16 md:pr-10 lg:pr-20">
          <ExperienceCard 
            role="Machine Learning Intern"
            company="1stop.ai"
            duration="Aug 2024 – Sep 2024"
            icon={<FaBrain className="text-purple-500" />}
            color="bg-purple-500"
            certLink="Shubham_Aug_2024_internship_53992.pdf" 
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
            certLink="Shubham_Kumar_Sahu_Internship_Completion.pdf"
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