import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './components/Hero.jsx'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Objective from './components/Objective.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Project from './components/Project.jsx'
import Contact from './components/Contact.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <Objective />
    <Skills/>
    <Experience />
    <Project />
    <Contact />
  </StrictMode>,
)
