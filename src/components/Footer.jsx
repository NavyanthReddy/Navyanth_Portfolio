import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-social">
            <a 
              href="https://github.com/NavyanthReddy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              <FaGithub />
            </a>
            <a 
              href="https://www.linkedin.com/in/navyanthreddy/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              <FaLinkedin />
            </a>
          </div>
          <p className="footer-text">
            © 2025 Navyanth Bollareddy • Built with React
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
