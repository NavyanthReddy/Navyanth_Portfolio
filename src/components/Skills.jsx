import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skills = {
    'Languages & Certifications': [
      'Java 17', 'Kotlin', 'JavaScript', 'TypeScript', 'Python', 'SQL', 'PL/SQL',
      'Oracle Certified Java SE 17 Developer',
      'AWS Solutions Architect – Associate'
    ],
    'Backend & Frameworks': [
      'Spring Boot', 'Spring MVC', 'Spring Security', 'Hibernate', 'JPA',
      'Node.js', 'Express.js', 'Microservices', 'Spring Cloud', 'API Gateway'
    ],
    'Frontend': [
      'React.js', 'Angular', 'Vue.js', 'Redux', 'Bootstrap', 'React-Bootstrap', 'HTML5', 'CSS3'
    ],
    'Databases & Cloud': [
      'MySQL', 'PostgreSQL', 'Oracle', 'MongoDB', 'DynamoDB', 'Amazon RDS', 'Redshift',
      'AWS (EC2, S3, RDS, Lambda, Fargate, CloudWatch, SNS)', 'Azure', 'GCP'
    ],
    'DevOps & Security': [
      'Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'Maven', 'Git', 'GitHub Actions',
      'JWT', 'OAuth 2.0', 'RBAC', 'JUnit 4/5', 'Postman'
    ]
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
