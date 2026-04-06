import './App.css'
import react from 'react'

function App() {
  return (
    //portfolio website
    <>
  
    {/*  header */}
  <nav className=" p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 sticky top-0 z-50">
  <div className="max-w-7xl mx-auto grid grid-cols-12 items-center gap-4">
    
    {/* Name/Logo - Left Aligned */}
    <div className="col-span-4 lg:col-span-5">
      <h1 className="text-xl font-bold tracking-tight text-blue-600">
        Shubham Kumar Sahu
      </h1>
    </div>

    {/* Navigation Links - Right Aligned */}
    <div className="col-span-8 lg:col-span-7 flex justify-between items-center text-sm font-medium text-gray-600">
      <a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a>
      <a href="#experience" className="hover:text-blue-500 transition-colors">Experience</a>
      <a href="#certifications" className="hover:text-blue-500 transition-colors">Certifications</a>
      <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
      <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
      
      {/* Resume Button - Highlighted */}
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all shadow-md">
        Resume
      </button>
    </div>

  </div>
</nav>
    
    </>
  )
 
}

export default App
