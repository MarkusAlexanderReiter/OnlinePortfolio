import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import './Navbar.css'

const Navbar = () => {
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
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
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
              Home
            </button>
            <button onClick={() => scrollToSection('projects')} className="nav-link">
              Projects
            </button>
            <button onClick={() => scrollToSection('about')} className="nav-link">
              About
            </button>
            <button onClick={() => scrollToSection('qualifications')} className="nav-link">
              Qualifications
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">
              Contact
            </button>
          </div>

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
