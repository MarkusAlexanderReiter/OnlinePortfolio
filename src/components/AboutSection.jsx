import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Server, Network, Code, Wrench } from 'lucide-react'
import './AboutSection.css'

const AboutSection = () => {
  const { t } = useTranslation()
  
  const skills = [
    {
      icon: <Server size={32} />,
      title: t('about.skills.systemAdmin.title'),
      description: t('about.skills.systemAdmin.description')
    },
    {
      icon: <Network size={32} />,
      title: t('about.skills.networkManagement.title'),
      description: t('about.skills.networkManagement.description')
    },
    {
      icon: <Code size={32} />,
      title: t('about.skills.development.title'),
      description: t('about.skills.development.description')
    },
    {
      icon: <Wrench size={32} />,
      title: t('about.skills.problemSolving.title'),
      description: t('about.skills.problemSolving.description')
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>{t('about.title')}</h2>
          <p>{t('about.subtitle')}</p>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>{t('about.journeyTitle')}</h3>
            <p>
              {t('about.journey1')}
            </p>
            <p>
              {t('about.journey2')}
            </p>
            <p>
              {t('about.journey3')}
            </p>
          </motion.div>

          <motion.div 
            className="skills-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skills.map((skill, index) => (
              <motion.div 
                key={index} 
                className="skill-card"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="skill-icon">{skill.icon}</div>
                <h4>{skill.title}</h4>
                <p>{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
