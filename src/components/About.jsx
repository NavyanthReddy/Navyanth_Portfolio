import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const techStack = [
    'Java 17', 'Spring Boot', 'Kotlin', 'Microservices', 'Spring Security',
    'Hibernate', 'JPA', 'REST APIs', 'DynamoDB', 'MongoDB', 'MySQL',
    'AWS', 'Docker', 'Kubernetes', 'Jenkins', 'React', 'TypeScript',
    'JWT', 'OAuth 2.0', 'Redis', 'Git'
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
            Oracle Certified Java SE 17 Developer with 3+ years of experience building secure, scalable applications using Java 17, Spring Boot, and microservices. I currently work at AWS on a caching platform for Organizations data, enabling internal support services with lower latency and higher throughput.
          </p>
          <p className="lead">
            My backend expertise spans Core Java, Spring Security, Hibernate, and REST APIs, with hands-on experience in Spring Cloud, API Gateway, and JWT authentication. I'm proficient across MySQL, Oracle, MongoDB, and DynamoDB using JPA/Hibernate, and comfortable with Docker, Kubernetes, Jenkins, and AWS (EC2, S3, RDS, IAM).
          </p>
          <p className="lead">
            I also build with React, Angular, and JavaScript, delivering clean, testable code in Agile teams. Open to relocation and new opportunities where backend engineering and cloud-native systems are core to the product.
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
