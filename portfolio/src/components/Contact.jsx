import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub, FaArrowRight } from 'react-icons/fa';

const ContactCard = ({ icon, title, value, link, color }) => (
  <motion.a 
    href={link} 
    target="_blank" 
    rel="noreferrer"
    whileHover={{ y: -5 }}
    className="flex flex-col p-6 md:p-10 bg-[#0a0f1d] border border-white/5 rounded-[32px] hover:border-blue-500/30 transition-all group relative overflow-hidden"
  >
    {/* Background Glow */}
    <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-600/5 rounded-full blur-3xl group-hover:bg-blue-600/10 transition-all"></div>
    
    <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl mb-6 ${color} group-hover:bg-blue-600 group-hover:text-white transition-all`}>
      {icon}
    </div>
    
    <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gray-500 mb-2 font-bold">{title}</p>
    <p className="text-white font-black text-lg md:text-2xl tracking-tight break-words">{value}</p>
    
    <div className="mt-6 flex items-center gap-2 text-blue-500 font-bold text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all">
      Connect Now <FaArrowRight size={10} />
    </div>
  </motion.a>
);

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-[#030712] px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 border-l-4 border-blue-600 pl-6">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-4 uppercase">
            Get in <span className="text-blue-600">Touch.</span>
          </h2>
          {/* <p className="text-gray-500 max-w-xl font-medium text-sm md:text-xl leading-relaxed">
            </p> */}
           <motion.p 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-gray-500 max-w-md font-medium text-sm md:text-base leading-relaxed"
                    >
                   I'm currently available for full-time roles and freelance opportunities. Let's build something extraordinary together.
         </motion.p>
        </div>

        {/* Contact Grid - Laptop par 2x2, Mobile par 1 column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <ContactCard 
            icon={<FaEnvelope />} 
            title="Email Address" 
            value="shubhamsahu82299@gmail.com" 
            link="mailto:shubhamsahu82299@gmail.com"
            color="text-blue-500"
          />
          <ContactCard 
            icon={<FaPhoneAlt />} 
            title="Phone Number" 
            value="+91 8668464275" 
            link="tel:+918668464275"
            color="text-emerald-500"
          />
          <ContactCard 
            icon={<FaLinkedin />} 
            title="LinkedIn Profile" 
            value="Shubham Kumar Sahu" 
            link="https://www.linkedin.com/in/shubham-kumar-sahu-204167262"
            color="text-blue-400"
          />
          <ContactCard 
            icon={<FaMapMarkerAlt />} 
            title="Current Location" 
            value="Bhusawal, Maharashtra" 
            link="#" // Map link yahan daal sakte ho
            color="text-rose-500"
          />
        </div>

        {/* Final Footer */}
        <div className="mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-2 text-center md:text-left">
            <p className="text-white font-black text-xl tracking-tighter uppercase">Shubham <span className="text-blue-600">Sahu.</span></p>
            <p className="text-gray-600 text-xs font-mono uppercase tracking-widest italic">GATE '26 Qualified | MERN Stack Developer</p>
          </div>
          
          <div className="flex gap-8 items-center">
             <a href="https://github.com/Shubhamsahu82299" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-all transform hover:scale-110"><FaGithub size={28} /></a>
             <a href="https://www.linkedin.com/in/shubham-kumar-sahu-204167262" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-blue-500 transition-all transform hover:scale-110"><FaLinkedin size={28} /></a>
          </div>
          
          <p className="text-gray-700 text-[10px] md:text-xs uppercase tracking-widest font-bold">
            © 2026 Crafted with Logic & React
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;