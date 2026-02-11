import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Navyanth Bollareddy
        </motion.h1>
        
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Software Engineer at Comcast • Building scalable full-stack applications
        </motion.p>
        
        <motion.div 
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <a href="#resume" className="btn btn-primary">
            View Resume
          </a>
          <a 
            href="https://www.linkedin.com/in/navyanthreddy/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a 
            href="https://github.com/NavyanthReddy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <FaGithub /> GitHub
          </a>
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  )
}

export default Hero
