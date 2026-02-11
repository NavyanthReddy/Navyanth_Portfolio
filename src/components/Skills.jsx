import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skills = {
    Languages: ['JavaScript', 'TypeScript', 'Java', 'Python', 'SQL'],
    Frameworks: ['React', 'Next.js', 'Spring Boot', 'Node.js', 'Express.js'],
    Tools: ['Git', 'Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'Jest', 'JUnit'],
    Cloud: ['AWS', 'PostgreSQL', 'MongoDB', 'Redis', 'Kafka', 'OpenTelemetry']
  }

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
        >
          Skills
        </motion.h2>

        <div className="skills-categories">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              className="skill-category"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
            >
              <h3 className="category-title">{category}</h3>
              <div className="skill-badges">
                {items.map((skill, index) => (
                  <span key={index} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
