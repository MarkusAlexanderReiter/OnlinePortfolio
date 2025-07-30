import React from 'react'
import { ChevronDown, Download, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import './HeroSection.css'

const HeroSection = () => {
  const { t } = useTranslation()
  
  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      const navbarHeight = 80 // Account for navbar height
      const elementPosition = element.offsetTop - navbarHeight
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
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
            transition={{ duration: 0.5 }}
          >
            <h1>{t('hero.title')}</h1>
            <p className="hero-subtitle">
              {t('hero.subtitle')}
            </p>
            <div className="hero-buttons">
              <button onClick={scrollToProjects} className="btn btn-primary">
                {t('hero.viewWork')}
                <ExternalLink size={18} />
              </button>
              <a href="#contact" className="btn btn-secondary">
                {t('hero.getInTouch')}
              </a>
            </div>
          </motion.div>
        </div>
        
        <motion.button 
          className="scroll-indicator"
          onClick={scrollToProjects}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          whileHover={{ y: 5 }}
        >
          <ChevronDown size={24} />
        </motion.button>
      </div>
    </section>
  )
}

export default HeroSection
