import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/NavyanthReddy', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/navyanthreddy/', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:navyanth1234@gmail.com', label: 'Email' }
  ]

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="hero-text">
            <motion.h1 variants={itemVariants} className="hero-title">
              Hi, I'm <span className="highlight">Navyanth Bollareddy</span>
            </motion.h1>
            
            <motion.h2 variants={itemVariants} className="hero-subtitle">
              Software Engineer & AI/ML Enthusiast
            </motion.h2>
            
            <motion.p variants={itemVariants} className="hero-description">
              Passionate about building innovative solutions and deploying machine learning models at scale. 
              Currently pursuing M.S. in Computer Science at University of Georgia, expected graduation in 2025. 
              Based in Austin, TX with 2+ years of experience in full-stack development and AI/ML.
            </motion.p>
            
            <motion.div variants={itemVariants} className="hero-buttons">
              <motion.a 
                href="#projects" 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
              <motion.a 
                href="#resume" 
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants} className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div 
            variants={itemVariants}
            className="hero-image"
          >
            <div className="profile-card">
              <div className="profile-image">
                <div className="profile-avatar">
                  <span>NB</span>
                </div>
                <div className="status-indicator"></div>
              </div>
              <div className="profile-info">
                <h3>Navyanth Bollareddy</h3>
                <p>Software Engineer</p>
                <div className="profile-stats">
                  <div className="stat">
                    <span className="stat-number">2+</span>
                    <span className="stat-label">Years</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">10+</span>
                    <span className="stat-label">Projects</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="scroll-arrow"></div>
      </motion.div>
    </section>
  )
}

export default Hero
