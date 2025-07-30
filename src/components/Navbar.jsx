import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import LanguageToggle from './LanguageToggle'
import './Navbar.css'

const Navbar = () => {
  const { t } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    // If we're not on the main page, navigate to main page first
    if (location.pathname !== '/') {
      navigate('/')
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          const navbarHeight = 80 // Account for navbar height
          const elementPosition = element.offsetTop - navbarHeight
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          })
        }
      }, 100)
    } else {
      // We're already on the main page, just scroll
      const element = document.getElementById(sectionId)
      if (element) {
        const navbarHeight = 80 // Account for navbar height
        const elementPosition = element.offsetTop - navbarHeight
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        })
      }
    }
    setIsOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          <Link to="/" className="nav-logo">
            <span>Portfolio</span>
          </Link>

          <div className={`nav-links ${isOpen ? 'open' : ''}`}>
            <button onClick={() => scrollToSection('home')} className="nav-link">
              {t('nav.home')}
            </button>
            <button onClick={() => scrollToSection('projects')} className="nav-link">
              {t('nav.projects')}
            </button>
            <button onClick={() => scrollToSection('about')} className="nav-link">
              {t('nav.about')}
            </button>
            <button onClick={() => scrollToSection('qualifications')} className="nav-link">
              {t('nav.qualifications')}
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">
              {t('nav.contact')}
            </button>
          </div>

          <LanguageToggle />

          <button
            className="nav-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
