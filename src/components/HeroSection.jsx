import React from 'react'
import { ChevronDown, Download, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import './HeroSection.css'

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero-section">
      <div className="hero-video-background">
        {/* Placeholder for video background */}
        <div className="video-placeholder">
          <div className="video-overlay"></div>
        </div>
      </div>
      
      <div className="hero-content">
        <div className="container">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>IT Professional & System Administrator</h1>
            <p className="hero-subtitle">
              Transforming ideas into robust technical solutions with hands-on experience 
              in network administration, system management, and innovative project development
            </p>
            <div className="hero-buttons">
              <button onClick={scrollToProjects} className="btn btn-primary">
                View My Work
                <ExternalLink size={18} />
              </button>
              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </div>
          </motion.div>
        </div>
        
        <motion.button 
          className="scroll-indicator"
          onClick={scrollToProjects}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          whileHover={{ y: 5 }}
        >
          <ChevronDown size={24} />
        </motion.button>
      </div>
    </section>
  )
}

export default HeroSection
