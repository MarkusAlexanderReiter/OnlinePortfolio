import React from 'react'
import { useTranslation } from 'react-i18next'
import { Github, Linkedin, Mail } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>{t('footer.getInTouch')}</h4>
            <p>{t('footer.description')}</p>
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
            <h4>{t('footer.quickLinks')}</h4>
            <div className="footer-links">
              <a href="#projects">{t('nav.projects')}</a>
              <a href="#about">{t('nav.about')}</a>
              <a href="#qualifications">{t('nav.qualifications')}</a>
              <a href="#contact">{t('nav.contact')}</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
