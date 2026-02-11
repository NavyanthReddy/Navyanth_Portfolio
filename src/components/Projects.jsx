import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const projects = [
    {
      id: 1,
      title: 'AI-Powered Code Review Platform',
      description: 'Automated GitHub PR review tool evaluated on 650 PRs across 25 repositories, reducing manual review time by 35% through webhook-driven architecture with Redis queues and LLM-based validation.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'LLM APIs'],
      github: 'https://github.com/NavyanthReddy/code-review-ai-lite',
      live: null
    },
    {
      id: 2,
      title: 'Gesture-Controlled Virtual Mouse System',
      description: 'Published research paper on computer vision-based hand gesture recognition achieving 95%+ accuracy with <50ms latency. Published in Springer ICIoT 2023 Conference Proceedings.',
      technologies: ['Python', 'OpenCV', 'Computer Vision', 'MediaPipe'],
      github: 'https://github.com/NavyanthReddy/gesture-controlled-virtual-mouse',
      live: null
    },
    {
      id: 3,
      title: 'Wellness Tracker',
      description: 'Comprehensive health and wellness tracking application with activity monitoring, health metrics tracking, goal setting, and progress visualization.',
      technologies: ['TypeScript', 'React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/NavyanthReddy/Wellness-Tracker',
      live: 'https://polite-otter-192c82.netlify.app'
    },
    {
      id: 4,
      title: 'Betting Ledger Microservices',
      description: 'Enterprise-grade betting ledger system built with Spring Boot 3.x and Java 21. Features event-driven architecture and Kafka integration.',
      technologies: ['Java', 'Spring Boot', 'Kafka', 'Docker'],
      github: 'https://github.com/NavyanthReddy/Betting-Ledger-Microservices',
      live: null
    }
  ]

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
        >
          Featured Work
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="project-image">
                <div className="project-image-placeholder">📱</div>
              </div>
              
              <h3 className="project-title">{project.title}</h3>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="project-tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="project-links">
                {project.live && (
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Live Demo
                  </a>
                )}
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
