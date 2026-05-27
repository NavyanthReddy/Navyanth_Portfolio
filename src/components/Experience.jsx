import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const experiences = [
    {
      company: 'Amazon Web Services (AWS)',
      role: 'Software Development Engineer',
      period: 'Jul 2025 – Present',
      location: 'Jersey City, NJ',
      project: 'AWS Organizations Cache Service Platform',
      bullets: [
        'Developed a scalable caching platform for AWS Organizations data, enabling internal AWS Support services to access organization metadata with lower latency and higher TPS',
        'Designed microservices-based cache services using Java/Kotlin and Spring Boot with Smithy-based data models and layered API-Service-DAO architecture',
        'Built anti-entropy synchronization using DynamoDB TTL event streams and integrated SNS notifications for real-time event-driven workflows',
        'Deployed containerized applications on AWS Fargate with ALB integration, multi-region deployments, and CI/CD pipelines using AWS CDK, Jenkins, and Docker',
        'Configured CloudWatch alarms, automated rollback mechanisms, and Lambda-based canary monitoring to validate API and service health in production'
      ]
    },
    {
      company: 'Infosys',
      role: 'Software Developer',
      period: 'Sep 2024 – May 2025',
      location: 'Atlanta, GA',
      project: 'E-Commerce Application',
      bullets: [
        'Developed and deployed a scalable MERN stack e-commerce application with secure authentication, responsive UI, and efficient backend services',
        'Built RESTful APIs with Node.js and Express.js, integrated MongoDB with Mongoose, and implemented JWT authentication with RBAC for customer and admin roles',
        'Optimized performance using Redis caching, database indexing, and query optimization; integrated payment gateway APIs with transaction validation',
        'Deployed on AWS EC2 using Docker and Kubernetes with Jenkins CI/CD pipelines, AWS S3 for static assets, and CloudWatch for observability'
      ]
    },
    {
      company: 'Accenture',
      role: 'Java Software Engineer',
      period: 'May 2021 – Nov 2022',
      location: 'Remote',
      project: 'Air Travel Booking Application',
      bullets: [
        'Developed an airline ticket reservation system using Java 17, Spring Boot, Hibernate, MySQL, and JSP with microservices architecture for scalability',
        'Implemented MVC architecture with Hibernate ORM, server-side validations, and Spring Java Mail Sender for booking confirmation notifications',
        'Built interactive UIs with JSPs, responsive HTML5/CSS layouts, and conducted API testing with Postman to ensure endpoint reliability',
        'Configured Jenkins CI/CD pipelines and deployed on AWS EC2 with Maven, MySQL, and S3 for secure resource storage'
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
                  {exp.project && (
                    <p className="experience-project">{exp.project}</p>
                  )}
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
