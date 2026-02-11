import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const experiences = [
    {
      company: 'Comcast',
      role: 'Software Engineer',
      period: 'Jul 2025 – Present',
      location: 'Englewood Cliffs, NJ',
      bullets: [
        'Developed customer self-service portal features using React, Spring Boot, and PostgreSQL, enabling 12K+ users and reducing support tickets by 28%',
        'Implemented JWT authentication with Spring Security and Redis, securing 15+ API endpoints across 3 user role types',
        'Optimized React bundle from 2.1MB to 850KB using code-splitting, improving Time to Interactive by 45%',
        'Built reusable component library with 15+ React components, reducing development time by 40% across 6 teams'
      ]
    },
    {
      company: 'Infosys',
      role: 'Software Engineer',
      period: 'Sep 2024 – May 2025',
      location: 'Atlanta, GA',
      bullets: [
        'Developed customer onboarding system with React, Spring Boot, and MongoDB handling 2.5K+ monthly registrations with 99.7% success rate',
        'Built REST API with 12 endpoints using Spring Boot, reducing data inconsistency errors by 50%',
        'Engineered responsive React components across all viewports, increasing mobile conversion rate by 22%',
        'Containerized application with Docker and Kubernetes, creating Helm charts for consistent deployments'
      ]
    }
  ]

  return (
    <section id="experience" className="experience" ref={ref}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
        >
          Experience
        </motion.h2>

        <div className="experience-list">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-card"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="experience-header">
                <div>
                  <h3 className="experience-role">{exp.role}</h3>
                  <p className="experience-company">{exp.company}</p>
                </div>
                <div className="experience-meta">
                  <span className="experience-period">{exp.period}</span>
                  <span className="experience-location">{exp.location}</span>
                </div>
              </div>
              <ul className="experience-bullets">
                {exp.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex}>{bullet}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
