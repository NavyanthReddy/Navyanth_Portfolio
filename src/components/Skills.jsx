import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaDatabase, 
  FaServer, FaBrain, FaDocker, FaAws, FaGitAlt, FaGithub, FaNpm 
} from 'react-icons/fa'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: '🎨',
      skills: [
        { name: 'React', icon: FaReact, level: 90, color: '#61DAFB' },
        { name: 'React Native', icon: FaReact, level: 85, color: '#61DAFB' },
        { name: 'JavaScript', icon: FaJs, level: 90, color: '#F7DF1E' },
        { name: 'TypeScript', icon: FaJs, level: 80, color: '#3178C6' },
        { name: 'HTML5', icon: FaHtml5, level: 95, color: '#E34F26' },
        { name: 'CSS3', icon: FaCss3Alt, level: 90, color: '#1572B6' }
      ]
    },
    {
      title: 'Backend Development',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, level: 90, color: '#339933' },
        { name: 'Python', icon: FaPython, level: 95, color: '#3776AB' },
        { name: 'Java', icon: FaServer, level: 85, color: '#ED8B00' },
        { name: 'Express.js', icon: FaServer, level: 90, color: '#000000' },
        { name: 'Flask', icon: FaServer, level: 85, color: '#000000' },
        { name: 'MongoDB', icon: FaDatabase, level: 85, color: '#47A248' }
      ]
    },
    {
      title: 'Machine Learning & AI',
      icon: '🤖',
      skills: [
        { name: 'TensorFlow', icon: FaBrain, level: 90, color: '#FF6F00' },
        { name: 'Keras', icon: FaBrain, level: 85, color: '#D00000' },
        { name: 'OpenCV', icon: FaBrain, level: 80, color: '#5C3EE8' },
        { name: 'NumPy', icon: FaBrain, level: 85, color: '#4DABCF' },
        { name: 'Pandas', icon: FaBrain, level: 80, color: '#150458' },
        { name: 'Streamlit', icon: FaBrain, level: 75, color: '#FF4B4B' }
      ]
    },
    {
      title: 'Tools & Cloud',
      icon: '☁️',
      skills: [
        { name: 'Docker', icon: FaDocker, level: 85, color: '#2496ED' },
        { name: 'AWS', icon: FaAws, level: 80, color: '#FF9900' },
        { name: 'Git', icon: FaGitAlt, level: 95, color: '#F05032' },
        { name: 'GitHub', icon: FaGithub, level: 95, color: '#181717' },
        { name: 'Socket.IO', icon: FaServer, level: 80, color: '#010101' },
        { name: 'Kafka', icon: FaServer, level: 75, color: '#231F20' }
      ]
    }
  ]

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Skills & Technologies
        </motion.h2>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-title">{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="skill-icon">
                      <skill.icon style={{ color: skill.color }} />
                    </div>
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.3 }}
                          style={{ backgroundColor: skill.color }}
                        />
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="skills-summary"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="summary-card">
            <h3>Continuous Learning</h3>
            <p>
              I'm always exploring new technologies and frameworks to stay current with industry trends. 
              Currently learning advanced ML techniques, cloud architecture, and modern development practices.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
