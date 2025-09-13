import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaDownload, FaFilePdf, FaEye, FaGraduationCap, FaBriefcase, FaCode, FaBrain } from 'react-icons/fa'

const Resume = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const handleDownload = () => {
    try {
      // Create a link element to trigger download
      const link = document.createElement('a')
      link.href = '/NavyanthReddy.github.io/resume/Navyanth_Bollareddy_Resume.pdf'
      link.download = 'Navyanth_Bollareddy_Resume.pdf'
      link.target = '_blank'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      console.log('Download initiated for resume')
    } catch (error) {
      console.error('Download failed:', error)
      // Fallback: open in new tab
      window.open('/NavyanthReddy.github.io/resume/Navyanth_Bollareddy_Resume.pdf', '_blank')
    }
  }

  const handleView = () => {
    try {
      // Open resume in new tab
      window.open('/NavyanthReddy.github.io/resume/Navyanth_Bollareddy_Resume.pdf', '_blank')
      console.log('Opening resume in new tab')
    } catch (error) {
      console.error('Failed to open resume:', error)
    }
  }

  const resumeHighlights = [
    {
      icon: FaGraduationCap,
      title: 'Education',
      items: [
        'M.S. Computer Science - University of Georgia (2025)',
        'B.Tech in Computer Science Engineering',
        'GPA: 3.8/4.0'
      ]
    },
    {
      icon: FaBriefcase,
      title: 'Experience',
      items: [
        '2+ Years Full-Stack Development',
        'AI/ML Model Deployment',
        'Cloud Computing & DevOps',
        'Open Source Contributions'
      ]
    },
    {
      icon: FaCode,
      title: 'Technical Skills',
      items: [
        'Frontend: React, React Native, JavaScript, TypeScript',
        'Backend: Node.js, Python, Java, Express.js, Flask',
        'Database: MongoDB, PostgreSQL, MySQL',
        'Cloud: AWS, Docker, Kubernetes'
      ]
    },
    {
      icon: FaBrain,
      title: 'AI/ML Expertise',
      items: [
        'TensorFlow, Keras, PyTorch',
        'Computer Vision with OpenCV',
        'Natural Language Processing',
        'Model Deployment & MLOps'
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
          Download my resume to learn more about my experience, skills, and achievements.
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
                <p>Software Engineer & AI/ML Enthusiast</p>
              </div>
              
              <div className="resume-preview-content">
                <div className="preview-section">
                  <h4>Professional Summary</h4>
                  <p>
                    Passionate Software Engineer with 2+ years of experience in full-stack development 
                    and AI/ML. Currently pursuing M.S. in Computer Science at University of Georgia. 
                    Specialized in building scalable applications and deploying machine learning models.
                  </p>
                </div>
                
                <div className="preview-section">
                  <h4>Key Skills</h4>
                  <div className="skills-preview">
                    <span className="skill-tag">React</span>
                    <span className="skill-tag">Python</span>
                    <span className="skill-tag">TensorFlow</span>
                    <span className="skill-tag">Node.js</span>
                    <span className="skill-tag">AWS</span>
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
              
              <motion.button
                className="btn btn-secondary"
                onClick={handleView}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEye />
                View Resume
              </motion.button>
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
