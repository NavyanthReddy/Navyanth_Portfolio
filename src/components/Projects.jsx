import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const projects = [
    {
      id: 1,
      title: 'AWS Organizations Cache Service Platform',
      description: 'Scalable caching platform for AWS Organizations data built with Kotlin, Java, Spring Boot, DynamoDB, SNS, and AWS Fargate. Features anti-entropy synchronization, event-driven workflows, multi-region deployment, and Lambda-based canary monitoring.',
      technologies: ['Java', 'Kotlin', 'Spring Boot', 'DynamoDB', 'AWS Fargate', 'SNS', 'CDK'],
      github: null,
      live: null
    },
    {
      id: 2,
      title: 'MERN Stack E-Commerce Application',
      description: 'Full-stack e-commerce platform with secure JWT authentication, RBAC, Redux state management, payment gateway integration, Redis caching, and admin portal for user and product management.',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Redis', 'AWS EC2'],
      github: null,
      live: null
    },
    {
      id: 3,
      title: 'Air Travel Booking Application',
      description: 'Airline ticket reservation system with Java 17, Spring Boot, Hibernate, and MySQL. Microservices architecture with MVC design, automated email notifications, Jenkins CI/CD, and AWS EC2 deployment.',
      technologies: ['Java 17', 'Spring Boot', 'Hibernate', 'MySQL', 'JSP', 'Jenkins'],
      github: null,
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
              
              {(project.live || project.github) && (
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
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
