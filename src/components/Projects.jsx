import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGithub, FaExternalLinkAlt, FaCode, FaBrain, FaMobile } from 'react-icons/fa'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const projects = [
    {
      id: 1,
      title: 'Wellness Tracker',
      description: 'Comprehensive health and wellness tracking application built with TypeScript. Features activity monitoring, health metrics tracking, goal setting, and progress visualization.',
      image: <FaMobile />,
      technologies: ['TypeScript', 'React', 'Node.js', 'MongoDB', 'Chart.js'],
      github: 'https://github.com/NavyanthReddy/Wellness-Tracker',
      live: 'https://polite-otter-192c82.netlify.app',
      featured: true
    },
    {
      id: 2,
      title: 'Betting Ledger Microservices',
      description: 'Enterprise-grade betting ledger system built with Spring Boot 3.x, Java 21, and modern cloud-native technologies. Features event-driven architecture and Kafka integration.',
      image: <FaCode />,
      technologies: ['Java', 'Spring Boot', 'Kafka', 'Docker', 'Microservices'],
      github: 'https://github.com/NavyanthReddy/Betting-Ledger-Microservices',
      live: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Movie Booking System',
      description: 'Full-stack movie booking web application built with MERN stack. Features movie browsing, real-time search, seat selection, ticket booking, and responsive design with Tailwind CSS.',
      image: <FaCode />,
      technologies: ['React', 'Next.js', 'MongoDB', 'Express', 'Tailwind CSS'],
      github: 'https://github.com/NavyanthReddy/MovieBookingSystem',
      live: '#',
      featured: true
    },
    {
      id: 4,
      title: 'Super-Resolution UI',
      description: 'GAN-based image upscaling application with Streamlit frontend. Uses deep learning to enhance image quality and resolution with interactive user interface.',
      image: <FaBrain />,
      technologies: ['Keras', 'TensorFlow', 'Streamlit', 'Python', 'OpenCV'],
      github: 'https://github.com/NavyanthReddy/image-super-resolution',
      live: '#',
      featured: false
    },
    {
      id: 5,
      title: 'DevCollab',
      description: 'Real-time collaborative task management platform with WebSocket integration and JWT authentication. Features live updates, team collaboration, and project tracking.',
      image: <FaMobile />,
      technologies: ['React', 'Node.js', 'Socket.IO', 'JWT', 'MongoDB'],
      github: 'https://github.com/NavyanthReddy/devcollab',
      live: '#',
      featured: false
    },
    {
      id: 6,
      title: 'AI Sound Recognition',
      description: 'Real-time song identification from humming using CNN-RNN architecture deployed on mobile devices. Features audio preprocessing, neural network inference, and user-friendly interface.',
      image: <FaBrain />,
      technologies: ['Flask', 'React Native', 'Docker', 'TensorFlow', 'Python'],
      github: 'https://github.com/NavyanthReddy/song-recognition',
      live: '#',
      featured: false
    },
    {
      id: 7,
      title: 'Gesture Controlled Virtual Mouse',
      description: 'Computer vision application that controls mouse cursor using hand gestures. Built with OpenCV and Python for accessibility and hands-free computing.',
      image: <FaBrain />,
      technologies: ['Python', 'OpenCV', 'MediaPipe', 'NumPy', 'Computer Vision'],
      github: 'https://github.com/NavyanthReddy/gesture-controlled-virtual-mouse',
      live: '#',
      featured: false
    }
  ]

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <div className="projects-grid">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card featured"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <div className="project-icon">
                  {project.image}
                </div>
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                    {project.live && project.live !== '#' && (
                      <a href={project.live} className="project-link" target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="other-projects"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="subsection-title">Other Projects</h3>
          <div className="other-projects-grid">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card small"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="project-icon-small">
                  {project.image}
                </div>
                <div className="project-info">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className="project-tech-small">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag-small">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
