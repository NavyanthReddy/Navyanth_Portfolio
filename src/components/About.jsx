import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const techStack = [
    'React', 'TypeScript', 'JavaScript', 'Java', 'Spring Boot', 'Node.js',
    'PostgreSQL', 'MongoDB', 'Redis', 'AWS', 'Docker', 'Kubernetes',
    'Python', 'TensorFlow', 'PyTorch', 'Git', 'CI/CD'
  ]

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
        >
          About
        </motion.h2>

        <motion.div 
          className="content-width"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <p className="lead">
            Software Engineer at Comcast with 2+ years of experience building scalable full-stack applications. 
            Recently completed M.S. in Computer Science from University of Georgia (GPA: 3.6/4.0). 
            Specialized in React, Spring Boot, AWS, and cloud-native architectures.
          </p>
        </motion.div>

        <motion.div 
          className="tech-stack-grid"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {techStack.map((tech, index) => (
            <span key={index} className="tech-badge">
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
