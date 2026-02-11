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
          I'm a software engineer leveraging AI at Comcast building systems that process millions of requests daily. My work spans fullstack development—React, TypeScript, Spring Boot, Java—and machine learning with TensorFlow and PyTorch.
          I've published research on gesture-controlled interfaces in Springer, built an AI-powered code review platform. I solve the problems that actually matter: distributed systems that don't break, ML models that work in production, and databases that scale under real load.
          What drives me: hard technical problems, clean architecture, and shipping code that matters. I'm looking for roles where engineering excellence isn't optional and the technical bar stays high.
          Currently based in New Jersey, open to remote opportunities and relocation.
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
