import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaDownload, FaFilePdf, FaEye, FaGraduationCap, FaBriefcase, FaCode, FaAward } from 'react-icons/fa'

const RESUME_FILE = 'Navy_Software Development Engineer.pdf'
const RESUME_URL = `/resume/${encodeURIComponent(RESUME_FILE)}`

const Resume = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = RESUME_URL
    link.download = 'Navy_Software_Development_Engineer.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const resumeHighlights = [
    {
      icon: FaGraduationCap,
      title: 'Education',
      items: [
        'M.S. Computer Science – University of Georgia',
        'B.Tech in Computer Science Engineering'
      ]
    },
    {
      icon: FaBriefcase,
      title: 'Experience',
      items: [
        'Software Development Engineer – AWS (Jul 2025 – Present)',
        'Software Developer – Infosys (Sep 2024 – May 2025)',
        'Java Software Engineer – Accenture (May 2021 – Nov 2022)'
      ]
    },
    {
      icon: FaAward,
      title: 'Certifications',
      items: [
        'Oracle Certified Professional: Java SE 17 Developer',
        'AWS Certified Solutions Architect – Associate'
      ]
    },
    {
      icon: FaCode,
      title: 'Technical Skills',
      items: [
        'Backend: Java 17, Spring Boot, Hibernate, Microservices',
        'Frontend: React, Angular, JavaScript, TypeScript',
        'Cloud: AWS (EC2, S3, RDS, Fargate, Lambda, DynamoDB)',
        'DevOps: Docker, Kubernetes, Jenkins, Terraform'
      ]
    }
  ]

  return (
    <section id="resume" className="resume" ref={ref}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Resume
        </motion.h2>

        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Download my resume to learn more about my experience, skills, and certifications.
        </motion.p>

        <div className="resume-content">
          <motion.div 
            className="resume-preview"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="resume-card">
              <div className="resume-header">
                <FaFilePdf className="pdf-icon" />
                <h3>Navyanth Bollareddy</h3>
                <p>Software Development Engineer • Java & Cloud</p>
              </div>
              
              <div className="resume-preview-content">
                <div className="preview-section">
                  <h4>Professional Summary</h4>
                  <p>
                    Oracle Certified Java SE 17 Developer with 3+ years of experience building secure, 
                    scalable applications using Java 17, Spring Boot, and microservices. Currently at AWS 
                    building cache services for Organizations data. AWS Solutions Architect certified.
                  </p>
                </div>
                
                <div className="preview-section">
                  <h4>Key Skills</h4>
                  <div className="skills-preview">
                    <span className="skill-tag">Java 17</span>
                    <span className="skill-tag">Spring Boot</span>
                    <span className="skill-tag">Kotlin</span>
                    <span className="skill-tag">AWS</span>
                    <span className="skill-tag">DynamoDB</span>
                    <span className="skill-tag">Docker</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="resume-actions"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="action-buttons">
              <motion.button
                className="btn btn-primary"
                onClick={handleDownload}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload />
                Download Resume
              </motion.button>
              
              <motion.a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEye />
                View Resume
              </motion.a>
            </div>

            <div className="resume-highlights">
              {resumeHighlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  className="highlight-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="highlight-icon">
                    <highlight.icon />
                  </div>
                  <div className="highlight-content">
                    <h4>{highlight.title}</h4>
                    <ul>
                      {highlight.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Resume
