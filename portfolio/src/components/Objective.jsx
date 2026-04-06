import React from 'react';
import { motion } from 'framer-motion';

const Objective = () => {
  return (
    <section className="py-12 md:py-24 bg-[#030712] px-4 md:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto"> {/* Skills ke max-width se match kiya */}
        
        {/* Section Header - EXACTLY like Skills Header */}
        <div className="mb-16 border-l-4 border-blue-600 pl-6">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-4 uppercase"
          >
            My <span className="text-blue-600">Mission.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-md font-medium text-sm md:text-base leading-relaxed"
          >
            Architecting scalable systems and solving complex engineering challenges through a logic-first approach.
          </motion.p>
        </div>

        {/* The Main Objective Card - Padding reduced for Mobile */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative p-6 md:p-12 bg-[#0a0f1d] border border-white/5 rounded-[32px] shadow-2xl shadow-black/30 overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute -top-10 -right-10 w-40 h-40 md:w-60 md:h-60 bg-blue-600/10 rounded-full blur-[80px] md:blur-[100px] -z-10"></div>
          
          <div className="relative z-10 space-y-8">
            {/* Typography */}
            <p className="text-lg md:text-2xl lg:text-3xl text-white font-bold leading-snug md:leading-tight tracking-tight">
              "Focused on architecting <span className="text-blue-500">scalable MERN systems</span> where clean code meets efficient <span className="text-emerald-400 italic font-mono">Algorithms</span>. 
              Driven by the challenge of transforming complex backends into seamless, <span className="text-white border-b-2 border-blue-500/30">high-performance</span> user experiences."
            </p>

            {/* Sub-Details Container - Padding & Gap Optimized */}
            <div className="grid grid-cols-1 md:flex md:flex-wrap gap-6 md:gap-10 pt-8 border-t border-white/5">
              
              <div className="group">
                <p className="text-gray-500 text-[10px] uppercase tracking-[0.3em] mb-2 group-hover:text-blue-500 transition-colors">Core Tech</p>
                <p className="text-gray-300 font-bold text-sm md:text-lg font-mono tracking-tighter md:tracking-normal">MongoDB • Express • React • Node</p>
              </div>
              
              <div className="group">
                <p className="text-gray-500 text-[10px] uppercase tracking-[0.3em] mb-2 group-hover:text-emerald-500 transition-colors">Engineering</p>
                <p className="text-gray-300 font-bold text-sm md:text-lg tracking-tight">DSA & System Design</p>
              </div>

              {/* GATE Badge */}
              <div className="group md:ml-auto">
                <div className="flex flex-col items-start md:items-end">
                  <p className="text-gray-500 text-[9px] md:text-[10px] uppercase tracking-[0.3em] mb-2 italic">Academic Achievement</p>
                  <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-blue-400 font-black text-[10px] md:text-xs">
                    GATE '26 Qualified
                  </div>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Objective;