import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Get In Touch</h4>
            <p>Let's discuss opportunities and projects</p>
            <div className="social-links">
              <a href="mailto:your.email@example.com" aria-label="Email">
                <Mail size={20} />
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <div className="footer-links">
              <a href="#projects">Projects</a>
              <a href="#about">About</a>
              <a href="#qualifications">Qualifications</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Portfolio. Built with React & passion for technology.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
