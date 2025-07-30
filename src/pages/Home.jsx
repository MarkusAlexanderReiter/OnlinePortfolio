import React from 'react'
import HeroSection from '../components/HeroSection'
import ProjectsSection from '../components/ProjectsSection'
import AboutSection from '../components/AboutSection'
import QualificationsSection from '../components/QualificationsSection'
import ContactSection from '../components/ContactSection'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <QualificationsSection />
      <ContactSection />
    </div>
  )
}

export default Home
