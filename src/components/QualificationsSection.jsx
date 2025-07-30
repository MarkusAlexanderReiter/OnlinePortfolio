import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Award, Calendar, MapPin, Building } from 'lucide-react'
import './QualificationsSection.css'

const QualificationsSection = () => {
  const { t } = useTranslation()
  
  const qualifications = [
    {
      title: 'WIFI Network Admin Certificate',
      issuer: 'Certification Authority',
      date: '2023',
      type: 'certification',
      description: 'Advanced wireless network administration and security'
    },
    {
      title: 'CompTIA Network+ (In Progress)',
      issuer: 'CompTIA',
      date: '2024',
      type: 'certification',
      description: 'Comprehensive networking fundamentals and troubleshooting'
    }
  ]

  const workHistory = [
    {
      title: 'Network & System Administrator',
      company: 'Multi-Location Company',
      location: 'Three Locations',
      period: '2021 - Present',
      type: 'work',
      responsibilities: [
        'Sole administrator for network infrastructure across three mid-sized locations',
        'Implemented and maintained server virtualization environments',
        'Designed and deployed security protocols and monitoring systems',
        'Managed user accounts, permissions, and IT asset lifecycle'
      ]
    },
    {
      title: 'IT Support Specialist',
      company: 'Previous Company',
      location: 'Local Area',
      period: '2019 - 2021',
      type: 'work',
      responsibilities: [
        'Provided technical support for 100+ users across multiple departments',
        'Troubleshot hardware and software issues',
        'Assisted with network maintenance and upgrades',
        'Documented processes and created user training materials'
      ]
    },
    {
      title: 'Tech Support Representative',
      company: 'Entry-Level Position',
      location: 'Local Area',
      period: '2018 - 2019',
      type: 'work',
      responsibilities: [
        'Started IT career providing customer technical support',
        'Learned fundamental troubleshooting and communication skills',
        'Gained experience with various operating systems and software',
        'Developed problem-solving methodology and customer service skills'
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2
      }
    }
  }

  return (
    <section id="qualifications" className="qualifications-section section-padding">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
        >
          <h2>{t('qualifications.title')}</h2>
          <p>{t('qualifications.subtitle')}</p>
        </motion.div>

        <div className="qualifications-content">
          {/* Certifications */}
          <div className="qualifications-column">
            <h3><Award size={24} /> {t('qualifications.certifications')}</h3>
            <motion.div 
              className="items-list"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {qualifications.map((qual, index) => (
                <motion.div 
                  key={index} 
                  className="qualification-item"
                  variants={itemVariants}
                >
                  <div className="item-header">
                    <h4>{qual.title}</h4>
                    <span className="item-date">{qual.date}</span>
                  </div>
                  <div className="item-meta">
                    <span className="item-issuer">{qual.issuer}</span>
                  </div>
                  <p className="item-description">{qual.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Work Experience */}
          <div className="qualifications-column">
            <h3><Building size={24} /> {t('qualifications.workExperience')}</h3>
            <motion.div 
              className="items-list"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {workHistory.map((job, index) => (
                <motion.div 
                  key={index} 
                  className="work-item"
                  variants={itemVariants}
                >
                  <div className="item-header">
                    <h4>{job.title}</h4>
                    <span className="item-date">{job.period}</span>
                  </div>
                  <div className="item-meta">
                    <span className="item-company">
                      <Building size={16} /> {job.company}
                    </span>
                    <span className="item-location">
                      <MapPin size={16} /> {job.location}
                    </span>
                  </div>
                  <ul className="responsibilities-list">
                    {job.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex}>{resp}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div 
          className="experience-note text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.2 }}
          viewport={{ once: true }}
        >
          <p>
            <strong>{t('qualifications.experienceNote').split(':')[0]}:</strong> {t('qualifications.experienceNote').split(':')[1]?.trim()}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default QualificationsSection
