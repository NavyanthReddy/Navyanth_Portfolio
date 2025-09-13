import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const stats = [
    { number: '2+', label: 'Years Experience' },
    { number: '17+', label: 'Projects Completed' },
    { number: '15+', label: 'Technologies' },
    { number: '2025', label: 'Expected Graduation' }
  ]

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              I'm a passionate Software Engineer and AI/ML Enthusiast with 2+ years of experience in full-stack development 
              and machine learning. Currently pursuing my Master's degree in Computer Science at the University of Georgia, 
              expected to graduate in 2025. Based in Austin, TX, I'm US work authorized and open to remote and onsite opportunities.
            </p>
            <p>
              My expertise spans across web development, machine learning model deployment, cloud computing, and software engineering. 
              I specialize in building scalable applications using React, Node.js, Python, and deploying ML models with TensorFlow and Keras. 
              I love creating innovative solutions that solve real-world problems and continuously learning new technologies.
            </p>
            <p>
              When I'm not coding, you can find me exploring new AI/ML techniques, contributing to open-source projects, 
              or working on personal projects that challenge my skills and expand my knowledge in emerging technologies.
            </p>
          </motion.div>

          <motion.div 
            className="about-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="about-image">
              <div className="image-placeholder">
                <div className="code-icon">💻</div>
              </div>
              <div className="floating-elements">
                <div className="floating-element element-1">⚡</div>
                <div className="floating-element element-2">🚀</div>
                <div className="floating-element element-3">💡</div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="stats-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              className="stat-card"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
            >
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
